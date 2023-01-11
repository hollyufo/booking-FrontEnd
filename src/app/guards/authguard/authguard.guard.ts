import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthserviceService } from 'src/app/service/auth/authservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  constructor(private auth : AuthserviceService, private router: Router) {
  }
  canActivate() {
    if (this.auth.isLogedIn()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

}
