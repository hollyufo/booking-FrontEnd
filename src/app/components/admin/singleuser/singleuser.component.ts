import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-singleuser',
  templateUrl: './singleuser.component.html',
  styleUrls: ['./singleuser.component.css']
})
export class SingleuserComponent{
  updateForm: FormGroup;
  public user: any = {};
  constructor(private formbuilder: FormBuilder,private http: HttpClient, private router: Router) {
    this.updateForm = new FormGroup({})
   }
  private headers = new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  });

  private url = 'http://localhost:8083/api/v1/Admin/users/view/';

  ngOnInit(){
    this.updateForm = this.formbuilder.group({
      role: ['']
    });
    // getting user id from url
    const url1 = this.router.url;
    const id = url1.split('/')[2];
    console.log(id);
    const url = this.url + id;
    this.http.get(url, { headers: this.headers }).subscribe((response) => {
      console.log(response);
      this.user = response;
    }
    , (error) => {
      if(error.status === 403) {
        console.log("Unauthorized access");
      }
      console.log(error);
    }
    );
  }
  // updating user role
  updateUserRole(id: number) {
    const url = 'http://localhost:8083/api/v1/Admin/users/update/' + id + '/' + this.updateForm.value.role;
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
}
