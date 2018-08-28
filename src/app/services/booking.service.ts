import { Injectable } from '@angular/core';
import { BookingModel } from '../models/booking-model';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { ShortBookingModel } from '../models/short-booking-model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productList: BookingModel[];
  productList1: ShortBookingModel[];
  
  

  constructor(private http:HttpClient) { 
  }
  productUrl: string = "http://18.136.65.50:9008/bookingTicket/api/booking"
  productUrlshort: string = "http://18.136.65.50:9008/bookingTicket/api/shortbooking"

  getAll(){
    return this.http.get(this.productUrl);
    //return this.productList;
  }
  getbookings(id:number){
    let url = this.productUrl+"/"+id;
    return this.http.get<BookingModel>(url);
  }
  getbookingsShort(firstName:string){
    let url = this.productUrlshort+"/"+firstName;
    return this.http.get<ShortBookingModel[]>(url);
  }
  
}