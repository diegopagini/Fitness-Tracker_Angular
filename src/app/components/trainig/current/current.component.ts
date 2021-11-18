import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StopTrainingComponent } from '../stop-training/stop-training.component';

@Component({
  selector: 'aft-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css'],
})
export class CurrentComponent implements OnInit {
  @Output() trainingExit = new EventEmitter();

  progress = 0;
  timer: number | any;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.resumeTimer();
  }

  onStop() {
    clearInterval(this.timer);
    const dialogRef = this.dialog.open(StopTrainingComponent, {
      data: {
        progress: this.progress,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      result ? this.trainingExit.emit() : this.resumeTimer();
    });
  }

  private resumeTimer() {
    this.timer = setInterval(() => {
      this.progress = this.progress + 5;
      if (this.progress >= 100) {
        clearInterval(this.timer);
      }
    }, 1000);
  }
}
