import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Exercise } from './models/exercise.model';
import { TrainingService } from './services/training.service';

@Component({
  selector: 'aft-trainig',
  templateUrl: './trainig.component.html',
  styleUrls: ['./trainig.component.css'],
})
export class TrainigComponent implements OnInit {
  ongoingTraining = false;
  exerciseSubsciption!: Subscription;

  constructor(private trainingService: TrainingService) {}

  ngOnInit(): void {
    this.exerciseSubsciption = this.trainingService.exerciseChanged$.subscribe(
      (exercise: any) => {
        exercise
          ? (this.ongoingTraining = true)
          : (this.ongoingTraining = false);
      }
    );
  }
}
