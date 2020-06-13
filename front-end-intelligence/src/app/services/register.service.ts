import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private apiUrl: string = 'http://localhost:3333';

  constructor(private httpClient: HttpClient) {}

  register(data): Promise<any> {
    let endpoint = `${this.apiUrl}/user`;
    return this.httpClient.post(endpoint, data).toPromise();
  }
}
