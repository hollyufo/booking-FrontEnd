import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent {
  private headers = new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  });
  private url = 'http://localhost:8083/api/v1/Admin/hotels';
  constructor(private http: HttpClient, private router: Router) { }
  public hotels: any = [];
  ngOnInit() {
      const token = localStorage.getItem('token');
      if(token) {
        this.http.get(this.url, { headers: this.headers }).subscribe((response) => {
            console.log(response);
            this.hotels = response;
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
    approveHotel(hotelId: number) {
      const token = localStorage.getItem('token');
      if(token) {
        this.http.get(this.url + '/' + hotelId, { headers: this.headers }).subscribe((response) => {
            console.log(response);
            this.ngOnInit();
            Swal.fire({
              title: 'Success!',
              text: 'Your action has been completed successfully',
              icon: 'success'
            });
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
    getButtonText(hotel: any) {
      if(hotel.approved) {
        return "Approved";
      }else{
        return "Not Approved";
      }
    }
  }
