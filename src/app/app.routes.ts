import { CanMatchFn, RedirectCommand, Route, Router } from '@angular/router';
import { NoTaskComponent } from './tasks/no-task/no-task.component';
import {
  resolvePageTitle,
  resolveUserName,
  UserTasksComponent,
} from './users/user-tasks/user-tasks.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { routes as userRoutes } from './users/users.routes';
import { inject } from '@angular/core';

const dummyCanMatch: CanMatchFn = (route, segments) => {
  const router = inject(Router);
  const shouldGetAccess = Math.random(); // Replace with real logic
  console.log('Should get access: ' + shouldGetAccess);

  if (shouldGetAccess > 0.5) {
    return true;
  } else {
    return new RedirectCommand(router.parseUrl('/unauthorized'));
  }
};

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
    // canMatch: [dummyCanMatch],
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

// here we define a dummyCanMatch function that randomly allows or denies access to the /users/:userId route. If access is denied, it redirects to an /unauthorized page. This is just for demonstration for using canMatch; in a real application, you would replace the random logic with actual authentication or authorization checks.
