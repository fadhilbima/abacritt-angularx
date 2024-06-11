import { Routes } from '@angular/router';

export const route: Routes = [
  {
    path: '',
    title: 'Login',
    loadComponent: async () =>
      (await import('./login/login.component')).LoginComponent,
  },
];
