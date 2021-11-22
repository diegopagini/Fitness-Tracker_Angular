import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { UiService } from 'src/app/shared/services/ui.service';
import { AuthData } from '../models/auth-data.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;
  private subject = new BehaviorSubject<boolean>(false);
  authChange$: Observable<boolean> = this.subject.asObservable();

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private uiService: UiService
  ) {}

  initAuthListener() {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.isAuthenticated = true;
        this.subject.next(true);
        this.router.navigate(['/training']);
      } else {
        this.subject.next(false);
        this.router.navigate(['/login']);
        this.isAuthenticated = false;
      }
    });
  }

  registerUser(authData: AuthData): void {
    this.uiService.loadingStateChanged$.next(true);
    this.afAuth
      .createUserWithEmailAndPassword(authData.email, authData.password)
      .then(() => {
        this.uiService.loadingStateChanged$.next(false);
      })
      .catch((err) => {
        this.uiService.loadingStateChanged$.next(false);
        this.uiService.showSnackBar(err.message, '', 2500);
      });
  }

  login(authData: AuthData): void {
    this.uiService.loadingStateChanged$.next(true);
    this.afAuth
      .signInWithEmailAndPassword(authData.email, authData.password)
      .then(() => {
        this.uiService.loadingStateChanged$.next(false);
      })
      .catch((err) => {
        this.uiService.loadingStateChanged$.next(false);
        this.uiService.showSnackBar(err.message, '', 2500);
      });
  }

  logout(): void {
    this.afAuth.signOut();
  }

  isAuth(): boolean {
    return this.isAuthenticated;
  }
}
