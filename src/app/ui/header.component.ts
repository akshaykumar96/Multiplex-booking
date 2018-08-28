import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router, public service: LoginService) { }


  public messageClass1:string = "btn btn-primary";

  ngOnInit() {

    console.log("inside on init");
   
  }


 

  btnClick(e) {

    e.preventDefault();

       this.router.navigate(["/signup"]);
    
}
btnOut(e){

  e.preventDefault();
 this.service.isLoggedIn=false;
 this.messageClass1="show btn btn-primary";
}

}
