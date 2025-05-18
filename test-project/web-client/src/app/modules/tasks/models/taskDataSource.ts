import { DataSource } from '@angular/cdk/collections';
import { TodoItem } from './todoItem';
import { BehaviorSubject, Observable } from 'rxjs';

export class TaskDataSource extends DataSource<TodoItem> {
  private _dataStream = new BehaviorSubject<TodoItem[]>([]);

  constructor(initialData: TodoItem[]) {
    super();
    this.setData(initialData);
  }

  connect(): Observable<TodoItem[]> {
    return this._dataStream;
  }

  disconnect() {}

  setData(data: TodoItem[]) {
    this._dataStream.next(data);
  }

  getData(): TodoItem[] {
    return this._dataStream.value;
  }
}
