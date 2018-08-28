import { Component, OnInit } from '@angular/core';
import { UserModel } from '../models/user-model';
import {Router} from "@angular/router";
//import { LoginService } from '../services/login.service';
import { RegisterService } from "../services/register.service";


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  model: UserModel;
  constructor(public service: RegisterService, public router: Router ) {
    
   }

  ngOnInit() {

    this.model= new UserModel("","","","","");
  }

  submit(){
    
    this.service.create(this.model).subscribe({
      complete:()=>{
        console.log("registered");
        this.router.navigate(["/login"]);
      }
    })
  }

}
