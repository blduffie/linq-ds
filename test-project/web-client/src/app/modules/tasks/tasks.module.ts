/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { TasksRoutingModule } from './tasks.routing.module';
import { TaskListComponent } from './pages/task-list/task-list.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { ConfirmDeleteToDoComponent } from './components/confirm-delete-todo/confirm-delete-todo.component';

@NgModule({
  declarations: [TaskListComponent, AddTodoComponent, ConfirmDeleteToDoComponent],
  exports: [TasksRoutingModule],
  imports: [SharedModule, TasksRoutingModule],
})
export class TasksModule {}
