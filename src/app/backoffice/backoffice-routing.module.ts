import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackSamplePageComponent } from './pages/back-sample-page/back-sample-page.component';


const routes: Routes = [
  {
    path: '',
    component: BackSamplePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackofficeRoutingModule { }
