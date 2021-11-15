import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingupComponent } from './singup.component';
import { SingupRoutingModule } from './singup-routing.module';

@NgModule({
  declarations: [SingupComponent],
  imports: [CommonModule, SingupRoutingModule],
  exports: [SingupComponent, SingupRoutingModule],
})
export class SingupModule {}
