import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { HobbiesService } from '../services/hobbies.service';
import { AlertComponent } from '../shared/alert/alert.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public tabActive: 'dicas' | 'duvidas' = 'dicas';
  public errorMessage: string = '';
  public hobbies: string[] = [];
  public loaded: boolean = false;
  public hobbieDoubtActive: string = '';
  public hobbieId: string = '';

  @ViewChild('errorAlert', { static: false })
  public errorAlert: AlertComponent;

  constructor(
    private hobbiesService: HobbiesService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.getHobbies();

    this.route.params.subscribe((param) => {
      if (param.hobbieId) this.hobbieId = param.hobbieId;
    });
  }

  ngOnInit(): void {
    if (this.router.url.indexOf('duvidas') != -1) this.tabActive = 'duvidas';
    else this.tabActive = 'dicas';
  }

  changeTab(tab: 'dicas' | 'duvidas') {
    this.tabActive = tab;
  }

  chagenHobbieDoubt(hobbieId: string) {
    this.hobbieDoubtActive = hobbieId;
  }

  setAlertError(msg: string) {
    this.errorAlert.setStatus(true);
    this.errorMessage = msg;
  }

  async getHobbies() {
    try {
      let res = await this.hobbiesService.hobbies();

      this.hobbies = res;

      console.log(this.hobbies);

      setTimeout(() => {
        this.loaded = true;
      }, 2000);
    } catch (error) {
      this.setAlertError('Não foi possível carregar os hobbies');
    }
  }

  onAlertInteract(confirmed) {
    this.errorAlert.setStatus(false);
    this.loaded = true;
  }
}
