import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-auth-register',
  templateUrl: './auth-register.component.html',
  styleUrls: ['./auth-register.component.scss'],
})
export class AuthRegisterComponent implements OnInit {
  public registerForm: FormGroup;
  public objectData: any = {};
  public disabledForm: boolean = true;

  constructor(private authService: RegisterService, private router: Router) {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      cell: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confirm_password: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  getFieldError(formControlName) {
    let control = this.registerForm.get(formControlName);

    if (!control) return false;

    if (control.untouched) return false;

    if (formControlName === 'confirm_password')
      if (control.value !== this.registerForm.get('password').value) {
        control.setErrors({});
        return 'As senhas não correspondem';
      } else {
        control.setErrors(null);
      }

    if (control.valid) return false;

    if (control.hasError('required')) return 'Este campo é obrigatório.';

    if (control.hasError('minlength')) {
      let minlength = control.getError('minlength');
      return (
        'O mínimo de caracteres para este campo é ' +
        minlength.requiredLength +
        '.'
      );
    }

    return 'Campo inválido.';
  }

  async handleRegisterUser() {
    if (!this.registerForm.valid) {
      alert('Preencha os campos corretamente.');
      return;
    }

    let formValue = this.registerForm.value;

    try {
      let res = await this.authService.register(formValue);

      console.log('res', res);
    } catch (error) {
      console.log('error', error);

      alert(
        'Não foi possível efeturar login. Verifique os dados e tente novamente.'
      );
    }
  }
}
