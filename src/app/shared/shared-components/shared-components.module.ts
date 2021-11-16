import { NgModule } from '@angular/core';
import { SidenavModule } from './sidenav/sidenav.module';

@NgModule({
  imports: [SidenavModule],
  exports: [SidenavModule],
})
export class SharedComponentsModule {}
