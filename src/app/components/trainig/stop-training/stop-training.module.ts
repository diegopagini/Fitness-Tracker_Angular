import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { StopTrainingComponent } from './stop-training.component';

@NgModule({
  declarations: [StopTrainingComponent],
  imports: [CommonModule, FlexLayoutModule, MaterialModule],
  exports: [StopTrainingComponent],
})
export class StopTrainingModule {}
