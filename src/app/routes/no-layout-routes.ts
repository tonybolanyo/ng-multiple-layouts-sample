import { Routes } from '@angular/router';

export const FULLPAGE_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () => import('../empty/empty-routing.module').then(m => m.EmptyRoutingModule)
  },
];
