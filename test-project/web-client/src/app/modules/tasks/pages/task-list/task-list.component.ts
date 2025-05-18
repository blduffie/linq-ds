import { TasksService } from '../../services/tasks.service';
import { TodoItem } from '../../models/todoItem';
import { MatDialog } from '@angular/material/dialog';
import { AddTodoComponent } from '../../components/add-todo/add-todo.component';
import { ConfirmDeleteToDoComponent } from '../../components/confirm-delete-todo/confirm-delete-todo.component';
import { TaskDataSource } from '../../models/taskDataSource';
import { SnackBarService } from '../../../../shared/services/snack-bar.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  encapsulation: ViewEncapsulation.None,
})
export class TaskListComponent implements OnInit {
  today: Date = new Date();
  dataSource: TaskDataSource;
  displayedColumns: string[] = ['task', 'deadline', 'details', 'isComplete', 'id'];
  columnsToDisplayWithExpand = [...this.displayedColumns, 'expand'];
  expandedElement: TodoItem | null;

  constructor(
    protected tasksService: TasksService,
    private dialog: MatDialog,
    protected snackBarService: SnackBarService,
  ) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  public addItem(event: MouseEvent) {
    event.stopPropagation();
    const ref = this.dialog.open(AddTodoComponent);

    ref.afterClosed().subscribe((item: TodoItem) => {
      if (item) {
        this.tasksService.saveTodoItem(item).subscribe({
          next: (resp) => {
            const items = this.dataSource.getData();
            items.push(resp);
            this.dataSource.setData(items);
            this.snackBarService.success('Task created!');
          },
          error: () => {
            this.snackBarService.error('Error creating Task.');
          },
        });
      }
    });
  }

  addSubTask(task: TodoItem) {
    const ref = this.dialog.open(AddTodoComponent);

    ref.afterClosed().subscribe((item: TodoItem) => {
      if (item) {
        if (!task.subTasks) {
          task.subTasks = [];
        }
        task.subTasks.push(item);
        this.tasksService.updateTodoItem(task).subscribe({
          next: (resp) => {
            const items = this.dataSource.getData();
            const filteredTasks = items.filter((x) => x.id !== task.id);
            filteredTasks.push(resp);
            this.dataSource.setData(filteredTasks);
            this.snackBarService.success('Successfully added sub task.');
          },
          error: () => {
            this.snackBarService.error('Error updating task.');
          },
        });
      }
    });
  }

  deleteTask(id: string) {
    const ref = this.dialog.open(ConfirmDeleteToDoComponent, { data: id });

    ref.afterClosed().subscribe((resp: TodoItem[]) => {
      if (resp) {
        this.dataSource.setData(resp);
        this.snackBarService.success('To Do successfully deleted.');
      }
    });
  }

  public markComplete(id: string) {
    this.tasksService.markComplete(id).subscribe({
      next: (tasks) => {
        this.dataSource.setData(tasks);
        this.snackBarService.success('Task marked complete');
      },
      error: () => {
        this.snackBarService.error('Error marking task complete.');
      },
    });
  }

  private loadTasks() {
    this.tasksService.getTodoItems().subscribe({
      next: (items) => {
        this.dataSource = new TaskDataSource(items);
      },
      error: () => {
        this.snackBarService.error('Error loading Todo Tasks');
      },
    });
  }
}
