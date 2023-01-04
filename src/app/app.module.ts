import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { HotelsComponent } from './component/hotels/hotels.component';

// Routes
const AppRoutes: Routes = [
  { path: 'hotels', component: HotelsComponent },
  { path: '', redirectTo: '/hotels', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HotelsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
