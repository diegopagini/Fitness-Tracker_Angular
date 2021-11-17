import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { WelcomeRoutingModule } from './welcome-routing.module';

@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FlexLayoutModule,
    WelcomeRoutingModule,
  ],
  exports: [WelcomeComponent, WelcomeRoutingModule],
})
export class WelcomeModule {}
