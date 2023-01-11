

import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor() {

  }

  // save token to local storage
  saveToken(token: string) {
    localStorage.setItem('token', token);
    // decode token
    const decodedToken = jwtDecode(token);

    console.log(decodedToken); // Outputs the payload of the JWT as a JavaScript object
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
