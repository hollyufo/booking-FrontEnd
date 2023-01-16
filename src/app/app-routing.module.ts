
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeaderComponent } from './components/pages/header/header.component';
import {HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { LadingpageComponent } from './components/pages/ladingpage/ladingpage.component';
import { AuthguardGuard } from './guards/authguard/authguard.guard';
import { RoomsComponent } from './components/user/rooms/rooms.component';
import { AlluserComponent } from './components/admin/alluser/alluser.component';
import { SingleuserComponent } from './components/admin/singleuser/singleuser.component';
import { HotelsComponent } from './components/admin//hotels/hotels.component';
import { ManagerhotelComponent } from './components/manager/managerhotel/managerhotel.component';
import { ManagerroomsComponent } from './components/manager/managerrooms/managerrooms.component';
import { ReservationComponent } from './components/user/reservation/reservation.component';


const routes: Routes = [
  { path: '', component: LadingpageComponent },
  { path: 'home', component: HomeComponent , canActivate : [AuthguardGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'register', component:  RegisterComponent},
  { path: 'rooms', component:  RoomsComponent, canActivate : [AuthguardGuard]},
  { path: 'users', component:  AlluserComponent},
  { path: 'users/:id', component:  SingleuserComponent},
  { path: 'hotels', component:  HotelsComponent},
  { path: 'managerhotels', component:  ManagerhotelComponent},
  { path: 'managerrooms', component:  ManagerroomsComponent},
  { path: 'reservation', component:  ReservationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
