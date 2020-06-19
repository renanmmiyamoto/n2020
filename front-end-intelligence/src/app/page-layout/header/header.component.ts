import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public home: string = '/dicas/hobbie/0';
  public atividades: string = '/atividades';
  public perfil: string = '/perfil';
  public nome: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.nome = this.authService.getLoggedUser().nome;
    console.log(this.nome);
  }

  logout() {
    this.authService.removeLoggedUser();
    this.router.navigate(['login']);
  }
}
