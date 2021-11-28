import { Component, OnInit } from '@angular/core';
import { DbrequestService } from "../../services/dbrequest.service";
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  profileForm = new FormGroup({
    userName: new FormControl(''),
    fecha: new FormControl(''),
    hora: new FormControl(''),
    tipoConsulta: new FormControl(''),
    desSintomas: new FormControl(''),
    especie: new FormControl(''),
  });
  constructor(private dbrequestService: DbrequestService) { }

  ngOnInit(): void {
  }

  addNewCita(dataUser: any){
    this.dbrequestService.addNewCita(dataUser).subscribe(data => console.log(data))
  }

  onSubmit(){
    this.addNewCita(this.profileForm.value)
    console.warn(this.profileForm.value)
  }
}
