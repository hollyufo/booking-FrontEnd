import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {
  private headers = new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  });
  private url = 'http://localhost:8083/api/v1/customers/rooms';

  constructor(private http: HttpClient, private router: Router) { }
  public rooms: any = [];
  ngOnInit() {
    const token = localStorage.getItem('token');
    if(token) {
      this.http.get(this.url, { headers: this.headers }).subscribe((response) => {
          console.log(response);
          this.rooms = response;
      }, (error) => {
          if(error.status === 401) {
              // redirect to login page
              this.router.navigate(['/login']);
          }
          if(error.status === 403) {
              // redirect to login page
              this.router.navigate(['/login']);
          }
          console.log(error);
      });
    }else{
      console.log("No token found or token expired");
    }
  }


}
