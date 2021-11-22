import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, of, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UiService } from 'src/app/shared/services/ui.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'aft-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm!: FormGroup;
  isLoading$: Observable<boolean> = of(false);
  private unsubscribe$ = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private uiService: UiService
  ) {}

  ngOnInit(): void {
    this.isLoading$ = this.uiService.loadingStateChanged$.pipe(
      takeUntil(this.unsubscribe$)
    );

    this.loginForm = this.fb.group({
      email: [
        null,
        {
          validators: [Validators.required, Validators.email],
        },
        ,
      ],
      password: [null, [Validators.required, Validators.minLength(6)]],
    });
  }

  get emailRequiredError() {
    const email = this.loginForm.get('email');
    return email?.hasError('required') && email?.touched;
  }

  get emailTypeError() {
    const email = this.loginForm.get('email');
    return email?.hasError('email') && email?.touched;
  }

  get emailMinLengthError() {
    const email = this.loginForm.get('email');
    return email?.hasError('minlength') && email?.touched;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login({
        email: this.loginForm.get('email')?.value,
        password: this.loginForm.get('password')?.value,
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
