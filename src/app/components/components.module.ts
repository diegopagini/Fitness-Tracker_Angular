import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingupModule } from './auth/singup/singup.module';
import { LoginModule } from './auth/login/login.module';
import { TrainigModule } from './trainig/trainig.module';
import { CurrentModule } from './trainig/current/current.module';
import { NewTrainingModule } from './trainig/new-training/new-training.module';
import { PastTrainingsModule } from './trainig/past-trainings/past-trainings.module';

const components = [
  CommonModule,
  SingupModule,
  LoginModule,
  TrainigModule,
  CurrentModule,
  NewTrainingModule,
  PastTrainingsModule,
];

@NgModule({
  imports: [...components],
  exports: [...components],
})
export class ComponentsModule {}
