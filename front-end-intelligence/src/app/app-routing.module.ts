import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLoginComponent } from './auth/auth-login/auth-login.component';
import { AuthRegisterComponent } from './auth/auth-register/auth-register.component';
import { BodyComponent } from './page-layout/body/body.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './services/auth.guard';
import { TipsComponent } from './tips/tips.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {
    path: 'login',
    component: AuthLoginComponent,
  },
  {
    path: 'register',
    component: AuthRegisterComponent,
  },
  {
    path: '',
    component: BodyComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'dicas/hobbie/0', pathMatch: 'full' },
      {
        path: 'dicas/hobbie/:hobbieId',
        component: HomeComponent,
      },
      {
        path: 'duvidas/hobbie/:hobbieId',
        component: HomeComponent,
      },
      {
        path: 'dicas/:tipId',
        component: TipsComponent,
      },
      { path: '**', component: NotfoundComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
