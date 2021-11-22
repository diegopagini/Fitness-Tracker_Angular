import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TrainingService } from '../services/training.service';
import { Observable, of, Subject } from 'rxjs';
import { Exercise } from '../models/exercise.model';
import { takeUntil } from 'rxjs/operators';
import { UiService } from 'src/app/shared/services/ui.service';

@Component({
  selector: 'aft-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css'],
})
export class NewTrainingComponent implements OnInit, OnDestroy {
  exercises$!: Observable<Exercise[]>;
  newTrainingForm!: FormGroup;
  private unsubscribe$ = new Subject<void>();
  isLoading$: Observable<boolean> = of(false);

  constructor(
    private trainingService: TrainingService,
    private fb: FormBuilder,
    private uiService: UiService
  ) {}

  ngOnInit(): void {
    this.isLoading$ = this.uiService.loadingStateChanged$.pipe(
      takeUntil(this.unsubscribe$)
    );

    this.exercises$ = this.trainingService
      .getAvailableExercises()
      .pipe(takeUntil(this.unsubscribe$));

    this.newTrainingForm = this.fb.group({
      exercise: ['', [Validators.required]],
    });
  }

  onStartTraining(): void {
    this.trainingService.startExercise(
      this.newTrainingForm.get('exercise')?.value
    );
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
