import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routing } from './app.routing';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { InformationComponent } from './components/information/information.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConsultsComponent } from './pages/consults/consults.component';
import { HomeComponent } from './pages/home/home.component';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    InformationComponent,
    FooterComponent,
    ConsultsComponent,
    HomeComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    Routing,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
