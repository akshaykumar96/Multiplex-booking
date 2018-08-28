
 
   
 import { Component, OnInit } from '@angular/core';

 @Component({
   selector: 'app-payment',
   templateUrl: './payment.component.html',
   styleUrls: ['./payment.component.css']
 })
 export class PaymentComponent implements OnInit {
 
 
   isNetBanking: boolean = false; 
   isCreditCard: boolean = false; 
   isDebitCard: boolean = false; 
   isSelected:boolean = false;
 
   netBanking:any=3; 
 
   constructor() { }
 
   ngOnInit() {
   }
   updateUI(mode){
     this.isNetBanking=false; 
     this.isCreditCard=false; 
     this.isDebitCard=false;
     if(mode=="3")
       this.isNetBanking=true;
     else if(mode=="2")
       this.isCreditCard=true; 
     else if(mode=="1")
       this.isDebitCard=true;
   }
 
 }
 