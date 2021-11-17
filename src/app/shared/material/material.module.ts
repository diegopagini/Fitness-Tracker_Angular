import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';

const modules = [
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatTabsModule,
];

@NgModule({
  imports: [...modules],
  exports: [...modules],
})
export class MaterialModule {}
