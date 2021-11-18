import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Exercise } from '../models/exercise.model';

@Injectable({
  providedIn: 'root',
})
export class TrainingService {
  exerciseChanged$ = new Subject<Exercise>();
  private availableExercises: Exercise[] = [
    { id: 'crunches', name: 'Crunches', duration: 30, calories: 8 },
    { id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 15 },
    { id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 18 },
    { id: 'burpees', name: 'Burpees', duration: 60, calories: 8 },
  ];
  private runingExercise: Exercise | undefined;

  getAvailableExercises(): Exercise[] {
    return [...this.availableExercises];
  }

  startExercise(selectedId: string): void {
    this.runingExercise = this.availableExercises.find(
      (ex: Exercise) => ex.id === selectedId
    );
    // Emitting a copy of this.runingExercise
    this.exerciseChanged$.next(JSON.parse(JSON.stringify(this.runingExercise)));
  }

  getRuningExercise(): Exercise {
    return JSON.parse(JSON.stringify(this.runingExercise));
  }
}
