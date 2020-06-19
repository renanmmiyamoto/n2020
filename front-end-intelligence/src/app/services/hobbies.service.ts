import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HobbiesService {
  private apiUrl: string = environment.api_url;

  constructor(private httpClient: HttpClient) {}

  hobbies(): Promise<any> {
    let endpoint = `${this.apiUrl}/api/hobbies`;
    return this.httpClient.get(endpoint).toPromise();
  }
}
