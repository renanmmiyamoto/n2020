import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLoginComponent } from './auth/auth-login/auth-login.component';
import { AuthRegisterComponent } from './auth/auth-register/auth-register.component';
import { BodyComponent } from './page-layout/body/body.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: BodyComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: HomeComponent,
      },
    ],
  },
  {
    path: 'login',
    component: AuthLoginComponent,
  },
  {
    path: 'register',
    component: AuthRegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
