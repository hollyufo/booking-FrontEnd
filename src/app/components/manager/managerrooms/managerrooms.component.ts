import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-managerrooms',
  templateUrl: './managerrooms.component.html',
  styleUrls: ['./managerrooms.component.css']
})
export class ManagerroomsComponent {
  roomsForm: FormGroup
  private headers = new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  });
  private url =     'http://localhost:8083/api/v1/Manager/rooms';
  private urlhotel = 'http://localhost:8083/api/v1/Manager/hotels';
  constructor(private formbuilder: FormBuilder,private http: HttpClient, private router: Router) {
    this.roomsForm = new FormGroup({});
  }
  public rooms: any = [];
  public hotels: any = [];
  ngOnInit() {
    this.roomsForm = this.formbuilder.group({
      name: [''],
      price: [''],
      hotel: [''],
    });
    const token = localStorage.getItem('token');
    if(token) {
      this.http.get(this.url, { headers: this.headers }).subscribe((response) => {
          console.log(response);
          this.rooms = response;
          console.log(this.rooms);
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
      this.http.get(this.urlhotel, { headers: this.headers }).subscribe((response) => {
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
  }
  onSubmit() {
    console.log(this.roomsForm.value);
  }
}
