import { Route } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';

export const routes: Route[] = [
  {
    path: 'tasks',
    component: TasksComponent,
  },
];
