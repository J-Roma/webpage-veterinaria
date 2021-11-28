import { Component, OnInit } from '@angular/core';
import { DbrequestService } from "../../services/dbrequest.service";
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent implements OnInit {  
    profileForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
      email: new FormControl(''),
    });
    
  constructor(private dbrequestService: DbrequestService) { }

  ngOnInit(): void {
    
  }

  saveNewUser(dataUser: any){
    this.dbrequestService.registerUser(dataUser).subscribe(data => console.log(data))
  }

  onSubmit(){
    this.saveNewUser(this.profileForm.value)
    console.warn(this.profileForm.value)
  }
} 


