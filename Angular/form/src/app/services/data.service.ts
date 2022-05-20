import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  urlCheckEmail = 'http://localhost:4231/auth/check-email';

  constructor(private http: HttpClient) {}

  checkEmail(emailobj: { email: string }) {
    return this.http.post(this.urlCheckEmail, emailobj);
  }
}
