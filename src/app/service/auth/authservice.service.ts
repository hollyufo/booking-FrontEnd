import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor() { }

  // save token to local storage
  saveToken(token: string) {
    localStorage.setItem('token', token);
  }
  // get token from local storage
  getToken() {
    return localStorage.getItem('token');
  }
  // remove token from local storage
  removeToken() {
    localStorage.removeItem('token');
  }
  // check if the user is logged in
  isLogedIn() {
    return !!localStorage.getItem('token');
  }
}
