import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  withRouterConfig,
} from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withComponentInputBinding(),
      withRouterConfig({ paramsInheritanceStrategy: 'always' })
    ),
  ],
};

// paramsInheritanceStrategy: 'always ensures that child routes inherit route parameters from parent routes

// withComponentInputBinding: This enables automatic binding of route parameters to component inputs marked with the @Input decorator.
