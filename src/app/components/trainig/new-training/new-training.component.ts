import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'aft-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css'],
})
export class NewTrainingComponent {
  @Output() trainingStart = new EventEmitter<void>();

  onStartTraining() {
    this.trainingStart.emit();
  }
}
