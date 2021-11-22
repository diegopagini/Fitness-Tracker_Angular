import { Component, OnInit } from '@angular/core';
import { AuthService } from './components/auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'fitness-tracker';

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.auth.initAuthListener();
  }
}
