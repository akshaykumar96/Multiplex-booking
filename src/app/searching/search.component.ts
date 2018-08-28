import { Component, OnInit } from '@angular/core';
import { BookingModel } from '../models/booking-model';
import {ProductService  } from "../services/booking.service";
import { ShortBookingModel } from '../models/short-booking-model';
import { Router } from "@angular/router";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  productList : any[];
  model:ShortBookingModel;

  constructor(private service:ProductService,
  private router:Router) { }

  ngOnInit() {
    this.model=new ShortBookingModel(0,"","","");
   
  }
  
  search(){
    console.log("inside search() ");
    console.log("print"+this.model.movieFirstName);
    // e.preventDefault();
    this.service.getbookingsShort(this.model.movieFirstName).subscribe((r)=>{
      console.log(r);
      
    this.router.navigate(["/result", this.model.movieFirstName]);
    });
  }
  
}
