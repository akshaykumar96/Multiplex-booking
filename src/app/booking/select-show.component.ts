import { Component, OnInit } from '@angular/core';
import { RegisterService } from "../services/register.service";
import { UserModel } from '../models/user-model';
import { NgModule } from '@angular/core';
import { SelectModel } from '../models/select-model';
import { SelectService } from '../services/select.service';
import {ProductService  } from "../services/booking.service";
import { BookingModel } from '../models/booking-model';
import { Router, ActivatedRoute } from "@angular/router";
import { DatePipe } from '../../../node_modules/@angular/common';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-select-show',
  templateUrl: './select-show.component.html',
  styleUrls: ['./select-show.component.css'],
  providers: [DatePipe]
})
export class SelectShowComponent implements OnInit {

   today:number = Date.now();
  models:BookingModel;
 model:SelectModel;
 productList:Array<BookingModel>;
  constructor( public datepipe: DatePipe,public service: SelectService, public router: Router,private service1:ProductService,private route: ActivatedRoute) {
    this.model = new SelectModel("0","0",new Date(),"0","0","0");
    console.log(this.model.daate);
   }

   
  ngOnInit() {


    let latest_date =this.datepipe.transform(this.today, 'yyyy-MM-dd');
      document.getElementById("date").setAttribute("min",latest_date);
      console.log(latest_date);


    this.models=new BookingModel(0,0,"0","0","0","0","0","0");
    let id=parseInt(this.route.snapshot.paramMap.get("id"));


    
  
  console.log(`selected Id:${id}`);
  
  this.service1.getbookings(id).subscribe((response)=>
  {
    console.log(response);
    this.models=response;
  });
 // this.service.getAll();
  }
checkValid(){
  if(this.model.noOfTickets==="0")
  { console.log('ticketempty');
    return false;}

  else if(this.model.classs==="0")
  { console.log('screenempty');
    return false;}
  
  else if(this.model.screen==="0")
  { console.log('timingempty');
    return false;}
  else if(this.model.shows==="0")
  { console.log('classempty');
    return false;}
  else 
  return true;



}

submit(e){
  e.preventDefault(); 
  if(this.checkValid())


  this.service.setModal(this.model);

  console.log("no of tickets in payment"+this.model.noOfTickets);


  
  this.service.create(this.model).subscribe({
    complete:()=>{
      this.router.navigate(['/payment',this.models.id]);
    }
  });
  
   
  

 
}
}
