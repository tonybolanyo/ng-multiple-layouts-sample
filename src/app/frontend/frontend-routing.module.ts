import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontSamplePageComponent } from './pages/front-sample-page/front-sample-page.component';


const routes: Routes = [
  {
    path: '',
    component: FrontSamplePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontendRoutingModule { }
