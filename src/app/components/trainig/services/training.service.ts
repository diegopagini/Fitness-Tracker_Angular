import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Exercise } from '../models/exercise.model';

@Injectable({
  providedIn: 'root',
})
export class TrainingService {
  exerciseChanged$ = new Subject<Exercise | null>();
  private availableExercises: Exercise[] = [
    { id: 'crunches', name: 'Crunches', duration: 30, calories: 8 },
    { id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 15 },
    { id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 18 },
    { id: 'burpees', name: 'Burpees', duration: 60, calories: 8 },
  ];
  private runingExercise: any;
  private exercises: Exercise[] = [];

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

  completeExercise(): void {
    this.exercises.push({
      ...this.runingExercise,
      date: new Date(),
      state: 'completed',
    });
    this.runingExercise = null;
    this.exerciseChanged$.next(null);
  }

  cancelExercise(progress: number): void {
    this.exercises.push({
      ...this.runingExercise,
      duration: this.runingExercise.duration * (progress / 100),
      calories: this.runingExercise.calories * (progress / 100),
      date: new Date(),
      state: 'cancelled',
    });
    this.runingExercise = null;
    this.exerciseChanged$.next(null);
  }

  getRuningExercise(): Exercise {
    // One way to create a copy
    return JSON.parse(JSON.stringify(this.runingExercise));
  }

  getCompletedorCancelledExercises(): Exercise[] {
    // Another way to create a copy
    return this.exercises.slice();
  }
}
