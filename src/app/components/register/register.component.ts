import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
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
        email: this.registerForm.get('email')?.value,
        password: this.registerForm.get('password')?.value
      };
      this.http.post(url, body).subscribe(
        (response) => {
          // Handle successful registration
          console.log(response);
        },
        (error) => {
          // Handle registration error
          console.log(error);
        }
      );
    }
  }
}
