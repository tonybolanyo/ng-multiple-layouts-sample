import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackofficeRoutingModule } from './backoffice-routing.module';
import { BackheaderComponent } from './shared/backheader/backheader.component';
import { BackfooterComponent } from './shared/backfooter/backfooter.component';
import { BackLayoutComponent } from './shared/back-layout/back-layout.component';


@NgModule({
  declarations: [BackheaderComponent, BackfooterComponent, BackLayoutComponent],
  imports: [
    CommonModule,
    BackofficeRoutingModule
  ]
})
export class BackofficeModule { }
