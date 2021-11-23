import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { finishLoading, startLoading } from 'src/app/store/actions/ui.action';
import { State } from 'src/app/store/reducers/ui.reducer';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  loadingStateChanged$ = new BehaviorSubject<boolean>(false);

  constructor(
    private snack: MatSnackBar,
    private store: Store<{ ui: State }>
  ) {}

  showSnackBar(message: string, action: string, duration: number) {
    this.snack.open(message, action, {
      duration,
    });
  }

  dispatchStartLoading() {
    this.store.dispatch(startLoading());
  }

  dispatchFinishLoading() {
    this.store.dispatch(finishLoading());
  }
}
