import { Component, OnInit } from '@angular/core';
import { DbrequestService } from "../../services/dbrequest.service";
import { Citas } from "../../models/cita.intrerface";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-list-booking',
  templateUrl: './list-booking.component.html',
  styleUrls: ['./list-booking.component.css']
})
export class ListBookingComponent implements OnInit {

  citas: any = [];
  
  constructor(private dbrequestService: DbrequestService) { }


  ngOnInit(): void {
    this.getCitas()
  }

  getCitas() {
    this.dbrequestService.getCitas().subscribe(data => this.citas = data);
  }
}
