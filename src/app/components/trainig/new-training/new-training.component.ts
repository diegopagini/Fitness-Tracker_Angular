import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Exercise } from '../models/exercise.model';
import { TrainingService } from '../services/training.service';

@Component({
  selector: 'aft-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css'],
})
export class NewTrainingComponent implements OnInit {
  exercises: Exercise[] = [];
  newTrainingForm!: FormGroup;

  constructor(
    private trainingService: TrainingService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.exercises = this.trainingService.getAvailableExercises();

    this.newTrainingForm = this.fb.group({
      exercise: ['', [Validators.required]],
    });
  }

  onStartTraining(): void {
    this.trainingService.startExercise(
      this.newTrainingForm.get('exercise')?.value
    );
  }
}
