import { Route } from '@angular/router';
import { NoTaskComponent } from './tasks/no-task/no-task.component';
import {
  resolvePageTitle,
  resolveUserName,
  UserTasksComponent,
} from './users/user-tasks/user-tasks.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { routes as userRoutes } from './users/users.routes';

export const routes: Route[] = [
  {
    path: '',
    component: NoTaskComponent,
    title: 'No Task Selected',
  },
  {
    path: 'users/:userId',
    component: UserTasksComponent,
    children: userRoutes,
    data: {
      message: 'Hello!',
    },
    resolve: {
      userName: resolveUserName,
    },
    title: resolvePageTitle,
  },
  { path: '**', component: NotFoundComponent },
];
