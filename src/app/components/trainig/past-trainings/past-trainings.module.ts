import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PastTrainingsComponent } from './past-trainings.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [PastTrainingsComponent],
  imports: [CommonModule, MaterialModule, FlexLayoutModule],
  exports: [PastTrainingsComponent],
})
export class PastTrainingsModule {}
