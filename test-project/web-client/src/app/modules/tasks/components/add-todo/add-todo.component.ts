import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoItem } from '../../models/todoItem';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
})
export class AddTodoComponent implements OnInit {
  public todoForm: FormGroup;

  get task() {
    return this.todoForm.get('task');
  }

  get deadline() {
    return this.todoForm.get('deadline');
  }

  get details() {
    return this.todoForm.get('details');
  }

  get isComplete() {
    return this.todoForm.get('isComplete');
  }

  constructor(
    private dialogRef: MatDialogRef<AddTodoComponent>,
    private formBuilder: FormBuilder,
    protected tasksService: TasksService
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  public save() {
    const item = this.todoForm.value as TodoItem;
    this.dialogRef.close(item);
  }

  private buildForm() {
    this.todoForm = this.formBuilder.group({
      task: [null, Validators.required],
      deadline: [null, Validators.required],
      details: [null],
      isComplete: [false],
    });
  }
}
