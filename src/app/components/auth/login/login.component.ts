import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'aft-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
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
      this.authService.registerUser({
        email: this.loginForm.get('email')?.value,
        password: this.loginForm.get('password')?.value,
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
