// app.routing.ts
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from "./pages/register/register.component";
import { LoginComponent } from './pages/login/login.component';
import { ConsultsComponent } from './pages/consults/consults.component';
import { HomeComponent } from "./pages/home/home.component";
import { BookingComponent } from "./pages/booking/booking.component";

const appRoutes = [
  { path: '', component: HomeComponent,  pathMatch: 'full'},
  { path: 'consultas', component: ConsultsComponent,  pathMatch: 'full'},
  { path: 'agenda', component: BookingComponent,  pathMatch: 'full'},
  { path: 'login', component: LoginComponent,  pathMatch: 'full'},
  { path: 'registro', component: RegisterComponent,  pathMatch: 'full'},
];
export const Routing = RouterModule.forRoot(appRoutes); 