import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontendRoutingModule } from './frontend-routing.module';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FrontLayoutComponent } from './shared/front-layout/front-layout.component';
import { FrontSamplePageComponent } from './pages/front-sample-page/front-sample-page.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    FrontLayoutComponent,
    FrontSamplePageComponent
  ],
  imports: [
    CommonModule,
    FrontendRoutingModule
  ]
})
export class FrontendModule { }
