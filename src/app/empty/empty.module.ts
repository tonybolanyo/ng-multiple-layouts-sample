import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmptyRoutingModule } from './empty-routing.module';
import { FullPageComponent } from './pages/full-page/full-page.component';


@NgModule({
  declarations: [FullPageComponent],
  imports: [
    CommonModule,
    EmptyRoutingModule
  ]
})
export class EmptyModule { }
