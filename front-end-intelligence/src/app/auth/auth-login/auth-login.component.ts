import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss'],
})
export class AuthLoginComponent implements OnInit {
  public loginForm: FormGroup;
  public objectData: any = {};
  public disabledForm: boolean = true;

  constructor(private authService: RegisterService, private router: Router) {
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
      alert('Preencha os campos corretamente.');
      return;
    }

    let formValue = this.loginForm.value;

    /* try {
      let res = await this.authService.register(formValue);

      console.log('res', res);
    } catch (error) {
      console.log('error', error);

      alert(
        'Não foi possível efeturar login. Verifique os dados e tente novamente.'
      );
    } */
  }

  ngOnInit(): void {}
}
