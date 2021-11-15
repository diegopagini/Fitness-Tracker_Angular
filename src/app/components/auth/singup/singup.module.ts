import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingupComponent } from './singup.component';
import { SingupRoutingModule } from './singup-routing.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [SingupComponent],
  imports: [
    CommonModule,
    SingupRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule,
  ],
  exports: [SingupComponent, SingupRoutingModule],
})
export class SingupModule {}
