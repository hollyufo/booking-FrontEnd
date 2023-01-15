import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeaderComponent } from './components/pages/header/header.component';
import {HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { LadingpageComponent } from './components/pages/ladingpage/ladingpage.component';
import { AuthguardGuard } from './guards/authguard/authguard.guard';
import { RoomsComponent } from './components/user/rooms/rooms.component';

const routes: Routes = [
  { path: '', component: LadingpageComponent },
  { path: 'home', component: HomeComponent , canActivate : [AuthguardGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'register', component:  RegisterComponent},
  { path: 'rooms', component:  RoomsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
