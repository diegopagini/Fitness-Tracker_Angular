import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/components/auth/services/auth.service';

@Component({
  selector: 'aft-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css'],
})
export class SidenavListComponent implements OnInit, OnDestroy {
  @Output()
  sidenavToggle: EventEmitter<void> = new EventEmitter<void>();
  @Output()
  authEmitter = new EventEmitter<boolean>();
  isAuth: boolean = false;
  // Another way to takeUntil on pipe.
  authSubscription: Subscription = new Subscription();

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authSubscription = this.authService.authChange$.subscribe(
      (authStatus) => {
        this.isAuth = authStatus;
        this.authEmitter.emit(authStatus);
      }
    );
  }

  close() {
    this.sidenavToggle.emit();
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }
}
