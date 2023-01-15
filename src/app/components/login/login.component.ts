import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/service/auth/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup

  constructor(private formbuilder: FormBuilder, private http: HttpClient, private router: Router) {
    this.loginForm = new FormGroup({});
  }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email: [''],
      password: ['']
    });
  }
  onSubmit() {
    if(this.loginForm.valid) {
      const url = 'http://localhost:8083/api/v1/auth/authenticate';
      const body = {
        email: this.loginForm.get('email')?.value,
        password: this.loginForm.get('password')?.value
      };
      this.http.post(url, body).subscribe(
        (response) => {
          // using the auth service to save the token in the local storage
          // converting the response into a json object
          const data = JSON.stringify(response);
          // parsing the json object
          const json = JSON.parse(data);
          const authservice = new AuthserviceService();
          console.log('testing');
          console.log(json.token);
          authservice.saveToken(json.token);
          // redirecting to the home page
          this.router.navigate(['/home']);
        },
        (error) => {
          // Handle registration error
          console.log(error);
        }
      );
    }
  }
}
