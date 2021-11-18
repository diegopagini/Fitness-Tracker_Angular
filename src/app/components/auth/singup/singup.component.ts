import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'aft-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css'],
})
export class SingupComponent implements OnInit {
  singupForm!: FormGroup;
  maxDate!: Date;

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
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

  private setMaxDate() {
    this.maxDate = new Date();
    // Today minus 18 years
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }
}
