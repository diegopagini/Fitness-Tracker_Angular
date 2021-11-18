import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'aft-stop-training',
  templateUrl: './stop-training.component.html',
  styleUrls: ['./stop-training.component.css'],
})
export class StopTrainingComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
