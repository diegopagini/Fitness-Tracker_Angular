import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  loadingStateChanged$ = new BehaviorSubject<boolean>(false);

  constructor(private snack: MatSnackBar) {}

  showSnackBar(message: string, action: string, duration: number) {
    this.snack.open(message, action, {
      duration,
    });
  }
}
