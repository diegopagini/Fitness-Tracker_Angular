import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewTrainingComponent } from './new-training.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/shared/material/material.module';

@NgModule({
  declarations: [NewTrainingComponent],
  imports: [CommonModule, FlexLayoutModule, MaterialModule],
  exports: [NewTrainingComponent],
})
export class NewTrainingModule {}
