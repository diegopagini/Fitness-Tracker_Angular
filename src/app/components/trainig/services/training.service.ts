import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, Subject, throwError } from 'rxjs';
import { Exercise } from '../models/exercise.model';
import { catchError, map } from 'rxjs/operators';
import { UiService } from 'src/app/shared/services/ui.service';

@Injectable({
  providedIn: 'root',
})
export class TrainingService {
  exerciseChanged$ = new Subject<Exercise | null>();
  private runingExercise: any;

  constructor(private db: AngularFirestore, private uiService: UiService) {}

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
        }),
        catchError((err) => {
          this.uiService.showSnackBar(err.message, '', 2500);
          return throwError(err);
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

      // this.uiService.dispatchStartLoading();
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
    // this.uiService.dispatchFinishLoading();
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
    // this.uiService.dispatchFinishLoading();
  }

  getRuningExercise(): Exercise {
    // One way to create a copy
    return JSON.parse(JSON.stringify(this.runingExercise));
  }

  getCompletedOrCancelledExercises(): Observable<any> {
    return this.db
      .collection('finishedExercises')
      .valueChanges()
      .pipe(
        catchError((err) => {
          this.uiService.showSnackBar(err.message, '', 2500);
          return throwError(err);
        })
      );
  }

  private addDataToDatabase(exercise: Exercise): void {
    this.db.collection('finishedExercises').add(exercise);
  }
}
