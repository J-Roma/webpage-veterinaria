import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { Request } from "./interfaces/request";
import { Citas } from "../../app/models/cita.intrerface";

@Injectable({
  providedIn: 'root'
})
export class DbrequestService {
  baseUrl = "https://morning-anchorage-41470.herokuapp.com"

  constructor(private http: HttpClient) { }

  registerUser(request: Request){
    return this.http.post(`${this.baseUrl}/auth/register`, request);
  }

  addNewCita(request: Request){
    return this.http.post(`${this.baseUrl}/cita/create`, request);
  }

  getCitas() {
    return this.http.get(`${this.baseUrl}/cita/`);
  }

  // getCitas() {
  //   return this.http.get(`${this.baseUrl}/cita/`);
  // }

  // getMascota(id: string | number) {
  //   return this.http.get(`${this.baseUrl}/get.php?idMascota=${id}`);
  // }

  // addMascota(mascota: Mascota) {
  //   return this.http.post(`${this.baseUrl}/post.php`, mascota);
  // }

  // deleteMascota(mascota: Mascota) {
  //   return this.http.delete(`${this.baseUrl}/delete.php?idMascota=${mascota.id}`);
  // }

  // updateMascota(mascota: Mascota) {
  //   return this.http.put(`${this.baseUrl}/update.php`, mascota);
  // }
}
