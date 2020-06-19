import { Component, OnInit, ViewChild } from '@angular/core';
import { HobbiesService } from '../services/hobbies.service';
import { AlertComponent } from '../shared/alert/alert.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public tabActive: boolean = true;
  public errorMessage: string = '';
  public hobbies: string[] = [];

  public tipId: string = '';

  @ViewChild('errorAlert', { static: false })
  public errorAlert: AlertComponent;

  constructor(
    private hobbiesService: HobbiesService,
    private route: ActivatedRoute
  ) {
    this.getHobbies();

    this.route.params.subscribe((param) => {
      if (param.tipId) this.tipId = param.tipId;
    });
  }

  ngOnInit(): void {}

  changeTab(tab: boolean) {
    this.tabActive = tab;
    console.log(this.tabActive);
  }

  setAlertError(msg: string) {
    this.errorAlert.setStatus(true);
    this.errorMessage = msg;
  }

  async getHobbies() {
    try {
      let res = await this.hobbiesService.hobbies();

      console.log(res);

      this.hobbies = res;
    } catch (error) {
      console.log('error', error);

      this.setAlertError('Não foi possível carregar os hobbies');
    }
  }
}
