import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppPreloadStrategy } from './appPreLoadStrategy';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'tasks',
        pathMatch: 'full',
      },
      {
        path: 'tasks',
        loadChildren: () => import('./modules/tasks/tasks.module').then((m) => m.TasksModule),
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: AppPreloadStrategy,
      onSameUrlNavigation: 'reload',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
