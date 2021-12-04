import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routing } from './app.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { InformationComponent } from './components/information/information.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConsultsComponent } from './pages/consults/consults.component';
import { HomeComponent } from './pages/home/home.component';
import { FormComponent } from './components/form/form.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginformComponent } from './components/loginform/loginform.component';
import { RegisterComponent } from './pages/register/register.component';
import { RegisterformComponent } from './components/registerform/registerform.component';
import { ListBookingComponent } from './components/list-booking/list-booking.component';
import { BookingComponent } from "./pages/booking/booking.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    InformationComponent,
    FooterComponent,
    ConsultsComponent,
    HomeComponent,
    FormComponent,
    LoginComponent,
    LoginformComponent,
    RegisterComponent,
    RegisterformComponent,
    ListBookingComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    Routing,
    FontAwesomeModule,
    SweetAlert2Module.forRoot(),    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
