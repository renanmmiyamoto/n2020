import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public home: string = '/';
  public atividades: string = '/atividades';
  public perfil: string = '/perfil';

  constructor() {}

  ngOnInit(): void {}
}
