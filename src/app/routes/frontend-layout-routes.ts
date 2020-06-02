import { Routes } from '@angular/router';

export const FRONT_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () => import('../frontend/frontend.module').then(m => m.FrontendModule)
  },
];
