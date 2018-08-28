import { Component, OnInit } from '@angular/core';
import { SelectService } from '../services/select.service';
import { SelectModel } from '../models/select-model';
import {ProductService  } from "../services/booking.service";
import { BookingModel } from '../models/booking-model';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  models:BookingModel;
  productList:Array<BookingModel>;
  model:SelectModel;
  constructor(private service:SelectService, public router: Router,private service1:ProductService,private route: ActivatedRoute) {

    
   }

  ngOnInit() {
  this.models=new BookingModel(0,"","","","","","","");
    let id=parseInt(this.route.snapshot.paramMap.get("id"));
  
  console.log(`selected Id:${id}`);
  
  this.service1.getbookings(id).subscribe((response)=>
  {
    console.log(response);
    this.models=response;
  });
  this.model=this.service.getAll();
  
  }
  calculate()
  {
   // this.model.total=this.model.noOfTickets*200;
  }

}
