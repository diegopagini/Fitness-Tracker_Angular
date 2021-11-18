import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthData } from '../models/auth-data.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user!: User | null;
  private subject = new BehaviorSubject<boolean>(false);
  authChange$: Observable<boolean> = this.subject.asObservable();

  constructor(private router: Router) {}

  registerUser(authData: AuthData): void {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString(),
    };
    this.authSuccessfully();
  }

  login(authData: AuthData): void {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString(),
    };
    this.authSuccessfully();
  }

  logout(): void {
    this.user = null;
    this.subject.next(false);
    this.router.navigate(['/login']);
  }

  getUser(): any {
    // This is the way to break the reference with the object. And return a copy
    return { ...this.user };
  }

  isAuth(): boolean {
    return this.user != null;
  }

  private authSuccessfully(): void {
    this.subject.next(true);
    this.router.navigate(['/training']);
  }
}
