import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'aft-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css'],
})
export class SidenavListComponent {
  @Output()
  sidenavToggle: EventEmitter<void> = new EventEmitter<void>();

  close() {
    this.sidenavToggle.emit();
  }
}
