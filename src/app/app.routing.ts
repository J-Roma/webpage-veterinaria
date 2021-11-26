// app.routing.ts
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ConsultsComponent } from './pages/consults/consults.component';
import { HomeComponent } from "./pages/home/home.component";

const appRoutes = [
  { path: '', component: HomeComponent,  pathMatch: 'full'},
  { path: 'consultas', component: ConsultsComponent,  pathMatch: 'full'},
];
export const Routing = RouterModule.forRoot(appRoutes); 