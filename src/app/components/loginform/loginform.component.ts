import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  rutaApi = "https://localhost:3000/auth/login";
  constructor(private http: HttpClient) {}
  obtener() {
    return this.http.get(`${this.rutaApi}/`);
  }

  ngOnInit(): void {
    
  }

}
