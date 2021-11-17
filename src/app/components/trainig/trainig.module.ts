import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainigComponent } from './trainig.component';
import { TrainingRoutinModule } from './training-routing.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NewTrainingModule } from './new-training/new-training.module';
import { PastTrainingsModule } from './past-trainings/past-trainings.module';

@NgModule({
  declarations: [TrainigComponent],
  imports: [
    CommonModule,
    TrainingRoutinModule,
    MaterialModule,
    FlexLayoutModule,
    NewTrainingModule,
    PastTrainingsModule,
  ],
  exports: [TrainigComponent, TrainingRoutinModule],
})
export class TrainigModule {}
