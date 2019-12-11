// tslint:disable-next-line: max-line-length
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface MyData {
  success: boolean;
  message: string;
}

@Injectable()
export class AuthService {

  isLoggedStatus = false;

  constructor(private readonly http: HttpClient) { }

  setLoggedIn(value: boolean) {
    this.isLoggedStatus = value;
  }

  get isLoggedIn() {
    return this.isLoggedStatus;
  }
  getUserDetails(email, password) {
    // post the details to API server return value
    return this.http.post<MyData>('/api/auth.php', {
      email,
      password
    });
  }
}
