import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, finalize } from 'rxjs';
import { TodoItem } from '../models/todoItem';
import { env, environments } from '../../../../config/env.config';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  public apiUrl: string = environments[env.env].apiUrl;

  public isLoadingTaskItems$ = new BehaviorSubject(false);
  public isUpdatingTaskItems$ = new BehaviorSubject(false);
  public isDeletingTaskItems$ = new BehaviorSubject(false);
  public isSavingTaskItems$ = new BehaviorSubject(false);

  constructor(protected http: HttpClient) {}

  public getTodoItems(): Observable<TodoItem[]> {
    this.isLoadingTaskItems$.next(true);

    return this.http
      .get<TodoItem[]>(`${this.apiUrl}/TodoItems`)
      .pipe(finalize(() => this.isLoadingTaskItems$.next(false)));
  }

  public saveTodoItem(item: TodoItem): Observable<TodoItem> {
    this.isSavingTaskItems$.next(true);

    return this.http
      .post<TodoItem>(`${this.apiUrl}/TodoItems`, item)
      .pipe(finalize(() => this.isSavingTaskItems$.next(false)));
  }

  public updateTodoItem(item: TodoItem): Observable<TodoItem> {
    this.isUpdatingTaskItems$.next(true);

    return this.http
      .put<TodoItem>(`${this.apiUrl}/TodoItems`, item)
      .pipe(finalize(() => this.isUpdatingTaskItems$.next(false)));
  }

  public deleteToDo(guid: string): Observable<TodoItem[]> {
    this.isDeletingTaskItems$.next(true);

    return this.http
      .delete<TodoItem[]>(`${this.apiUrl}/TodoItems/${guid}`, {})
      .pipe(finalize(() => this.isDeletingTaskItems$.next(false)));
  }

  public markComplete(id: string): Observable<TodoItem[]> {
    this.isUpdatingTaskItems$.next(true);

    return this.http
      .put<TodoItem[]>(`${this.apiUrl}/TodoItems/MarkComplete/${id}`, id)
      .pipe(finalize(() => this.isUpdatingTaskItems$.next(false)));
  }
}
