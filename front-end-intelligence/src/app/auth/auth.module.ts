import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthRegisterComponent } from './auth-register/auth-register.component';
import { RegisterService } from '../services/register.service';
import { AppFileUploadComponent } from './app-file-upload/app-file-upload.component';
import { SharedModule } from '../shared/shared.module';
import { AuthService } from '../services/auth.service';

@NgModule({
  declarations: [
    AuthLoginComponent,
    AuthRegisterComponent,
    AppFileUploadComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    SharedModule,
  ],
  providers: [RegisterService, AuthService],
})
export class AuthModule {}
