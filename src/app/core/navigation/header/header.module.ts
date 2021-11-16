import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { SidenavListModule } from '../sidenav-list/sidenav-list.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SidenavListModule,
    FlexLayoutModule,
    RouterModule,
  ],
  exports: [HeaderComponent],
})
export class HeaderModule {}
