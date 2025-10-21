import { Route } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { NoTaskComponent } from './tasks/no-task/no-task.component';

export const routes: Route[] = [
  {
    path: '',
    component: NoTaskComponent,
  },
  {
    path: 'tasks',
    component: TasksComponent,
  },
];
