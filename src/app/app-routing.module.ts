import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./components/auth/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'singup',
    loadChildren: () =>
      import('./components/auth/singup/singup.module').then(
        (m) => m.SingupModule
      ),
  },
  {
    path: 'training',
    loadChildren: () =>
      import('./components/trainig/trainig.module').then(
        (m) => m.TrainigModule
      ),
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full',
  },
  {
    path: 'welcome',
    loadChildren: () =>
      import('./components/welcome/welcome.module').then(
        (m) => m.WelcomeModule
      ),
  },
  {
    path: '**',
    redirectTo: 'welcome',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      paramsInheritanceStrategy: 'always',
      relativeLinkResolution: 'corrected',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
