import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullPageComponent } from './pages/full-page/full-page.component';


const routes: Routes = [
  {
    path: '',
    component: FullPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmptyRoutingModule { }
