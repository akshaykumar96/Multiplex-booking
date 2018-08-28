import { Component, OnInit } from '@angular/core';
import { BookingModel } from '../models/booking-model';
import {ProductService  } from "../services/booking.service";
import { ShortBookingModel } from '../models/short-booking-model';
import { Router, ActivatedRoute } from "@angular/router";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  model:ShortBookingModel;
  productList:Array<ShortBookingModel>;

  
  constructor(private service:ProductService, private activeRoute: ActivatedRoute,
    private router:Router) { }

  ngOnInit() {

    let searchText = this.activeRoute.snapshot.paramMap.get("search");
    this.service.getbookingsShort(searchText).subscribe((r)=>{
      this.productList=r ;
      console.log("Results: ", r);
      
  });

}
}


