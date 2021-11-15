import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'aft-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css'],
})
export class SingupComponent implements OnInit {
  singupForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.singupForm = this.fb.group({
      email: [
        null,
        [Validators.email, Validators.required, Validators.minLength(6)],
      ],
      password: [null, [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.singupForm.valid) {
      console.log(this.singupForm.value);
    } else {
      this.singupForm.markAllAsTouched();
    }
  }
}
