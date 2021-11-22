import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule, MaterialModule, FlexLayoutModule],
  exports: [FooterComponent],
})
export class FooterModule {}
