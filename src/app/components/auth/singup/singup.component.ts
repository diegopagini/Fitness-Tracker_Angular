import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, of, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UiService } from 'src/app/shared/services/ui.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'aft-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css'],
})
export class SingupComponent implements OnInit, OnDestroy {
  singupForm!: FormGroup;
  maxDate!: Date;
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

    this.singupForm = this.fb.group({
      email: [
        null,
        [Validators.required, Validators.email, Validators.minLength(6)],
      ],
      password: [null, [Validators.required, Validators.minLength(6)]],
      birthdata: [null, [Validators.required]],
      agree: [null, [Validators.requiredTrue]],
    });

    this.setMaxDate();
  }

  get emailRequiredError() {
    const email = this.singupForm.get('email');
    return email?.hasError('required') && email?.touched;
  }

  get emailTypeError() {
    const email = this.singupForm.get('email');
    return email?.hasError('email') && email?.touched;
  }

  get emailMinLengthError() {
    const email = this.singupForm.get('email');
    return email?.hasError('minlength') && email?.touched;
  }

  onSubmit() {
    if (this.singupForm.valid) {
      this.authService.registerUser({
        email: this.singupForm.get('email')?.value,
        password: this.singupForm.get('password')?.value,
      });
    } else {
      this.singupForm.markAllAsTouched();
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private setMaxDate() {
    this.maxDate = new Date();
    // Today minus 18 years
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }
}
