import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { AlertComponent } from 'src/app/shared/alert/alert.component';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss'],
})
export class AuthLoginComponent implements OnInit {
  public loginForm: FormGroup;
  public objectData: any = {};
  public disabledForm: boolean = true;
  public errorMessage: string = '';

  @ViewChild('errorAlert', { static: false })
  public errorAlert: AlertComponent;

  constructor(private authService: AuthService, private router: Router) {
    this.loginForm = new FormGroup({
      cell: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  getFieldError(formControlName) {
    let control = this.loginForm.get(formControlName);

    if (!control) return false;

    if (control.untouched) return false;

    if (control.valid) return false;

    if (control.hasError('required')) return 'Este campo é obrigatório.';

    return 'Campo inválido.';
  }

  async handleLoginUser() {
    if (!this.loginForm.valid) {
      this.setAlertError('Preencha os campos corretamente.');
      return;
    }

    let formValue = {
      celular: this.loginForm.value.cell,
      senha: this.loginForm.value.password,
    };

    try {
      let res = await this.authService.login(formValue);

      this.authService.setLoggedUser(res[0]);
      this.router.navigate(['/dicas/hobbie/0']);
    } catch (error) {
      this.setAlertError(
        'Não foi possível efeturar login. Verifique os dados e tente novamente.'
      );
    }
  }

  setAlertError(msg: string) {
    this.errorAlert.setStatus(true);
    this.errorMessage = msg;
  }

  onAlertInteract(confirmed) {
    this.errorAlert.setStatus(false);
  }

  ngOnInit(): void {}
}
