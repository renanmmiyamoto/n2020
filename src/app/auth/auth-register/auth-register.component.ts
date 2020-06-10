import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth-register',
  templateUrl: './auth-register.component.html',
  styleUrls: ['./auth-register.component.scss'],
})
export class AuthRegisterComponent implements OnInit {
  public registerForm: FormGroup;
  public objectData: any = {};

  constructor() {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      cell: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      avatar: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  getFieldError(formControlName) {
    // Recupera o campo pelo seu nome
    let control = this.registerForm.get(formControlName);

    // Retorna false caso o campo não foi encontrado
    if (!control) return false;

    // Retorna false caso campo ainda não sofreu interação
    if (control.untouched) return false;

    // Retorna false caso campo está válido
    if (control.valid) return false;

    // Retorna mensagem para caso validação de required
    if (control.hasError('required')) {
      return 'Este campo é obrigatório.';
    }

    // Retorna mensagem para caso validação de minLength
    if (control.hasError('minlength')) {
      let minlength = control.getError('minlength');
      return (
        'O mínimo de caracteres para este campo é ' +
        minlength.requiredLength +
        '.'
      );
    }

    // Caso campo é inválido mas erro não foi capturado acima
    return 'Campo inválido.';
  }

  handleSubmit(): void {
    console.log('objeto', this.objectData);

    console.log('dados', this.registerForm.value);

    // Salvando os dados em uma variável
    this.objectData = this.registerForm.value;

    // Exibindo se formulário é valido
    console.log('Válido?', this.registerForm.valid);

    // Exibindo os erros no formulário
    console.log('Erros', this.registerForm.errors);

    // Exibindo o valor de um campo
    console.log('Valor do campo name', this.registerForm.get('name').value);

    // Exibindo se um campo é válido
    console.log('Campo name é válido?', this.registerForm.get('name').valid);

    // Exibindo erros de um campo
    console.log('Erros no campo name', this.registerForm.get('name').errors);

    console.log('Erros no campo cell', this.registerForm.get('cell').errors);
  }
}
