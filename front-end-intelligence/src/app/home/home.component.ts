import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public tabActive: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  changeTab(tab: boolean) {
    this.tabActive = tab;
    console.log(this.tabActive);
  }
}
