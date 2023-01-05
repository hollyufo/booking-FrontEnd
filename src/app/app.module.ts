import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { HotelsComponent } from './component/hotels/hotels.component';
import { HerosectionComponent } from './component/herosection/herosection.component';
import { HomepageComponent } from './component/homepage/homepage.component';

// Routes
const AppRoutes: Routes = [
  { path: 'hotels', component: HotelsComponent },
  { path: '', component: HomepageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HotelsComponent,
    HerosectionComponent,
    HomepageComponent
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
