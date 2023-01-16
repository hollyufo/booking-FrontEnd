import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-alluser',
  templateUrl: './alluser.component.html',
  styleUrls: ['./alluser.component.css']
})
export class AlluserComponent {
  private headers = new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  });

  private url = 'http://localhost:8083/api/v1/Admin/users';
  constructor(private http: HttpClient, private router: Router) { }
  public users: any = [];
  public userid: number = 0;
  ngOnInit() {
    const token = localStorage.getItem('token');
    if(token) {
      this.http.get(this.url, { headers: this.headers }).subscribe((response) => {
          console.log(response);
          this.users = response;
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
  // banning user
  banUser(id: number) {
    const url = 'http://localhost:8083/api/v1/Admin/users/ban/' + id;
    this.http.get(url, { headers: this.headers }).subscribe((response) => {
      console.log(response);
      this.ngOnInit();
      Swal.fire({
        title: 'Success!',
        text: 'Your action has been completed successfully',
        icon: 'success'
      });
    }, (error) => {
      if(error.status === 403) {
        console.log("Unauthorized access");
      }
      console.log(error);
    });
  }
  getButtonText(user: any) {
    return user.banned ? 'Unban' : 'Ban';
  }
  viewUser(id: number) {
    this.router.navigate(['/users', id]);
  }
}
