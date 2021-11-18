import { Injectable } from '@angular/core';
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

  registerUser(authData: AuthData): void {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString(),
    };
    this.subject.next(true);
  }

  login(authData: AuthData): void {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString(),
    };
    this.subject.next(true);
  }

  logout(): void {
    this.user = null;
    this.subject.next(false);
  }

  getUser(): any {
    // This is the way to break the reference with the object. And return a copy
    return { ...this.user };
  }

  isAuth(): boolean {
    return this.user != null;
  }
}
