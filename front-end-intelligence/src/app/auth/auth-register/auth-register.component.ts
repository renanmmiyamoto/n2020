import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ValidatorFn,
} from '@angular/forms';
import { Router } from '@angular/router';

import { RegisterService } from '../../services/register.service';
import { AlertComponent } from 'src/app/shared/alert/alert.component';

@Component({
  selector: 'app-auth-register',
  templateUrl: './auth-register.component.html',
  styleUrls: ['./auth-register.component.scss'],
})
export class AuthRegisterComponent implements OnInit {
  public registerForm: FormGroup;
  public stepTwoForm: FormGroup;
  public objectData: any = {};
  public disabledForm: boolean = true;
  public step: number = 0;
  public errorMessage: string = '';

  @ViewChild('errorAlert', { static: false })
  public errorAlert: AlertComponent;

  constructor(private authService: RegisterService, private router: Router) {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confirm_password: new FormControl('', [Validators.required]),
    });

    this.stepTwoForm = new FormGroup({
      cellphone: new FormControl('', [Validators.required]),
      avatar: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  handleStep(step: number) {
    if (this.step === 0 && !this.registerForm.valid) {
      this.setAlertError('Preencha os campos corretamente.');
      return;
    }

    this.step = step;
  }

  validField(formControlName) {
    let control =
      this.step === 0
        ? this.registerForm.get(formControlName)
        : this.stepTwoForm.get(formControlName);

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

  setAlertError(msg: string) {
    this.errorAlert.setStatus(true);
    this.errorMessage = msg;
  }

  async handleRegisterUser() {
    if (!this.registerForm.valid || !this.stepTwoForm.valid) {
      this.setAlertError('Preencha os campos corretamente.');
      return;
    }

    let formValue = {
      nome:
        this.registerForm.value.name + '' + this.registerForm.value.lastname,
      senha: this.registerForm.value.password,
      celular: Number(this.stepTwoForm.value.cellphone),
      foto: 'avatar.jpg',
    };

    try {
      console.log({ formValue });

      let res = await this.authService.register(formValue);

      console.log('res', res);
    } catch (error) {
      console.log('error', error);

      this.setAlertError(
        'Não foi possível efeturar login. Verifique os dados e tente novamente.'
      );
    }
  }

  onAlertInteract(confirmed) {
    if (confirmed) console.log('confirmed');
    else console.log('canceled');

    this.errorAlert.setStatus(false);
  }
}
