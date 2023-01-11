import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthserviceService } from 'src/app/service/auth/authservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {
    this.registerForm = new FormGroup({});
   }
   ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      password: [''],
      userName: ['']
  });
}
   onSubmit() {
    if (this.registerForm.valid) {
      const url = 'http://localhost:8083/api/v1/auth/register';
      const body = {
        name: this.registerForm.get('firstName')?.value,
        lastName: this.registerForm.get('lastName')?.value,
        userName: this.registerForm.get('userName')?.value,
        email: this.registerForm.get('email')?.value,
        password: this.registerForm.get('password')?.value
      };
      this.http.post(url, body).subscribe(
        (response) => {
          // Handle successful registration
          console.log(response);
          // using the auth service to save the token in the local storage
          // converting the response into a json object
          const data = JSON.stringify(response);
          // parsing the json object
          const json = JSON.parse(data);
          console.log(json.token);
          const authservice = new AuthserviceService();
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
