import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingupComponent } from './singup.component';
import { SingupRoutingModule } from './singup-routing.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SingupComponent],
  imports: [
    CommonModule,
    SingupRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports: [SingupComponent, SingupRoutingModule],
})
export class SingupModule {}
