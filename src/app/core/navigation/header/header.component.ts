import { Component } from '@angular/core';
import { AuthService } from 'src/app/components/auth/services/auth.service';

@Component({
  selector: 'aft-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isAuth: boolean = false;

  constructor(private authService: AuthService) {}

  onAuthEmit(authValue: boolean) {
    this.isAuth = authValue;
  }

  onLogout() {
    this.authService.logout();
  }
}
