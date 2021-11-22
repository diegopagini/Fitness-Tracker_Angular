import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, Subject } from 'rxjs';
import { Exercise } from '../models/exercise.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TrainingService {
  exerciseChanged$ = new Subject<Exercise | null>();
  private runingExercise: any;
  private exercises: Exercise[] = [];

  constructor(private db: AngularFirestore) {}

  getAvailableExercises(): Observable<Exercise[]> {
    return this.db
      .collection('availableExercises')
      .snapshotChanges()
      .pipe(
        map((docArray) => {
          return docArray.map((doc: Exercise | any) => {
            return {
              id: doc.payload.doc.id,
              ...doc.payload.doc.data(),
            };
          });
        })
      );
  }

  startExercise(selectedId: string): void {
    this.getAvailableExercises().subscribe((exercises) => {
      this.runingExercise = exercises.find(
        (ex: Exercise) => ex.id === selectedId
      );
      // Emitting a copy of this.runingExercise
      this.exerciseChanged$.next(
        JSON.parse(JSON.stringify(this.runingExercise))
      );
    });
  }

  completeExercise(): void {
    this.addDataToDatabase({
      ...this.runingExercise,
      date: new Date(),
      state: 'completed',
    });
    this.runingExercise = null;
    this.exerciseChanged$.next(null);
  }

  cancelExercise(progress: number): void {
    this.addDataToDatabase({
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

  getCompletedOrCancelledExercises(): Observable<any> {
    return this.db.collection('finishedExercises').valueChanges();
  }

  private addDataToDatabase(exercise: Exercise): void {
    this.db.collection('finishedExercises').add(exercise);
  }
}
