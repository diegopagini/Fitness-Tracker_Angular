import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainigComponent } from './trainig.component';

const routes: Routes = [
  {
    path: '',
    component: TrainigComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainingRoutinModule {}
