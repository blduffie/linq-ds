import { Component, Inject } from '@angular/core';
import { take, finalize } from 'rxjs/operators';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TasksService } from '../../services/tasks.service';
import { SnackBarService } from '../../../../shared/services/snack-bar.service';
import { TodoItem } from '../../models/todoItem';

@Component({
  selector: 'app-confirm-delete-todo',
  templateUrl: './confirm-delete-todo.component.html',
  styles: [],
})
export class ConfirmDeleteToDoComponent {
  submitting = false;
  guid: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) data: string,
    private dialogRef: MatDialogRef<ConfirmDeleteToDoComponent>,
    protected tasksService: TasksService,
    protected snackBarService: SnackBarService
  ) {
    this.guid = data;
  }

  deleteToDo() {
    this.submitting = true;
    this.tasksService
      .deleteToDo(this.guid)
      .pipe(take(1))
      .pipe(finalize(() => (this.submitting = false)))
      .subscribe({
        next: (resp: TodoItem[]) => {
          this.dialogRef.close(resp);
        },
        error: () => {
          this.snackBarService.error('Error creating Task.');
        },
      });
  }
}
