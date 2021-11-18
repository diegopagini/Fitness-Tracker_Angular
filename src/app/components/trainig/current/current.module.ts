import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentComponent } from './current.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StopTrainingModule } from '../stop-training/stop-training.module';

@NgModule({
  declarations: [CurrentComponent],
  imports: [CommonModule, MaterialModule, FlexLayoutModule, StopTrainingModule],
  exports: [CurrentComponent],
})
export class CurrentModule {}
