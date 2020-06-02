import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BACK_ROUTES } from './routes/backoffice-layout-routes';
import { FRONT_ROUTES } from './routes/frontend-layout-routes';
import { BackSamplePageComponent } from './backoffice/pages/back-sample-page/back-sample-page.component';
import { FrontLayoutComponent } from './frontend/shared/front-layout/front-layout.component';
import { BackLayoutComponent } from './backoffice/shared/back-layout/back-layout.component';

const routes: Routes = [
  {
    path: '',
    component: FrontLayoutComponent,
    children: FRONT_ROUTES,
  },
  {
    path: 'back',
    component: BackLayoutComponent,
    children: BACK_ROUTES,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
