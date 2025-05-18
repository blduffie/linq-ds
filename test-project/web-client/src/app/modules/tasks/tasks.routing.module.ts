import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TaskListComponent } from './pages/task-list/task-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: TaskListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasksRoutingModule {}
