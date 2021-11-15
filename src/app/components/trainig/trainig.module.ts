import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainigComponent } from './trainig.component';
import { TrainingRoutinModule } from './training-routing.module';

@NgModule({
  declarations: [TrainigComponent],
  imports: [CommonModule, TrainingRoutinModule],
  exports: [TrainigComponent, TrainingRoutinModule],
})
export class TrainigModule {}
