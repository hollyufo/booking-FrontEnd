import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-managerhotel',
  templateUrl: './managerhotel.component.html',
  styleUrls: ['./managerhotel.component.css']
})
export class ManagerhotelComponent {
  hotelForm: FormGroup
  private headers = new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  });
  private url =     'http://localhost:8083/api/v1/Manager/hotels';
  private urlcity = 'http://localhost:8083/api/v1/Manager/cities';

  constructor(private formbuilder: FormBuilder,private http: HttpClient, private router: Router) {
    this.hotelForm = new FormGroup({});
  }
  public hotels: any = [];
  public cities: any = [];
  ngOnInit() {
    this.hotelForm = this.formbuilder.group({
      name: [''],
      address: [''],
      city: [''],
      image: [''],
    });
    const token = localStorage.getItem('token');
    if(token) {
      this.http.get(this.url, { headers: this.headers }).subscribe((response) => {
          console.log(response);
          this.hotels = response;
          console.log(this.hotels);
      }, (error) => {
          if(error.status === 401) {
              // redirect to login page
              //this.router.navigate(['/login']);
              console.log("401");
          }
          if(error.status === 403) {
              // redirect to login page
              //this.router.navigate(['/login']);
              console.log("403");
          }
          console.log(error);
      });
    }else{
      console.log("No token found or token expired");
    }
    if(token) {
      this.http.get(this.urlcity, { headers: this.headers }).subscribe((response) => {
          console.log(response);
          this.cities = response;
          console.log(this.cities);
      }, (error) => {
          if(error.status === 401) {
              // redirect to login page
              //this.router.navigate(['/login']);
              console.log("401");
          }
          if(error.status === 403) {
              // redirect to login page
              //this.router.navigate(['/login']);
              console.log("403");
          }
          console.log(error);
      });
    }else{
      console.log("No token found or token expired");
    }
  }
  onSubmit() {
    if(this.hotelForm.valid) {
      const url = 'http://localhost:8083/api/v1/Manager/hotels';
      const body = {
        name: this.hotelForm.get('name')?.value,
        address: this.hotelForm.get('address')?.value,
        city: this.hotelForm.get('city')?.value,
        image: this.hotelForm.get('image')?.value,
      };
      this.http.post(url, body, { headers: this.headers }).subscribe(
        (response) => {
          console.log(response);
          this.ngOnInit();
        },
        (error) => {
          // Handle registration error
          console.log(error);
        }
      );
    }
  }
}
