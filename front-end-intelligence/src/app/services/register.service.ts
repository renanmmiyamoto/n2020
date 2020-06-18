import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private apiUrl: string = environment.api_url;

  constructor(private httpClient: HttpClient) {}

  register(data): Promise<any> {
    let endpoint = `${this.apiUrl}/api/usuarios`;
    return this.httpClient.post(endpoint, data).toPromise();
  }
}
