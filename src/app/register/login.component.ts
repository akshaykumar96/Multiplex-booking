import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../models/login-model';
import { RegisterService } from '../services/register.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../services/login.service';
import { SelectModel } from '../models/select-model';
import { BookingModel } from '../models/booking-model';
import { HeaderComponent } from '../ui/header.component';
import { SelectService } from '../services/select.service';
import { ProductService } from '../services/booking.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoggedIn: boolean;
  redirectUrl: string;
  
  lmodel:LoginModel;
  bookMod: BookingModel= new BookingModel("0","","","","","","","");
  loginSuccess :boolean; 
  noOfTickets: string="0";
  selectMod: SelectModel=new SelectModel("","","","","","");
  head: HeaderComponent;
 
  id:string="0";
  messageClass1:string="";
  constructor( public selservice: SelectService,public service1: ProductService, public service: LoginService, public router: Router, public route: ActivatedRoute) {
    this.selectMod= this.selservice.getAll();
  
    
   }

  ngOnInit() {
    this.lmodel=new LoginModel("","");
    this.id = this.route.snapshot.paramMap.get("id");
  }
  messageClass:string = "hidden"; 
  submit(e){
    e.preventDefault();
    
    
    this.service.validateLogin(this.lmodel).subscribe((response)=> {

     // this.service.isLoggedIn = response;
      if (response) {
        this.loginSuccess=true;
        this.service.isLoggedIn=true;
        console.log("is logged in is"+this.service.isLoggedIn);



        
      

        console.log("id caught in login click"+this.id);

        
      this.router.navigate(["/home"]);
      console.log(" loginsubmit func done")
      
        
       }
      else {
        this.messageClass="show alert alert-danger";
         this.loginSuccess=false;
         this.isLoggedIn=false;
         console.log("is logged in is"+this.isLoggedIn);
      }

    });
  }




}
