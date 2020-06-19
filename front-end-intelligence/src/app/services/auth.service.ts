import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl: string = environment.api_url;

  constructor(private httpClient: HttpClient) {}

  // Função que efetua o login
  login(data): Promise<any> {
    let endpoint = `${this.apiUrl}/auth/celular/${data.celular}/pass/${data.senha}`;
    return this.httpClient.get(endpoint).toPromise();
  }

  setLoggedUser(userData) {
    let userDataString = JSON.stringify(userData);
    localStorage.setItem('loggedUser', userDataString);
  }

  getLoggedUser() {
    try {
      let userDataString = localStorage.getItem('loggedUser');
      let userData = JSON.parse(userDataString);
      return userData;
    } catch (error) {
      return null;
    }
  }

  removeLoggedUser() {
    localStorage.removeItem('loggedUser');
  }
}
