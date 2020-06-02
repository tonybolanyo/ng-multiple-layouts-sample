import { Routes } from '@angular/router';

export const BACK_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () => import('../backoffice/backoffice.module').then(m => m.BackofficeModule)
  },
];
