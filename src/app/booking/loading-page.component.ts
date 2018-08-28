import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-loading-page',
  templateUrl: './loading-page.component.html',
  styleUrls: ['./loading-page.component.css']
})
export class LoadingPageComponent implements OnInit {

  counter = 0; 
  constructor(public router: Router) { }

  ngOnInit() {

    setTimeout(()=>{ this.loopingFunc() }, 300);
  }

  loopingFunc(){
    this.counter++; 
    if(this.counter<20)
      setTimeout(()=>{ this.loopingFunc() }, 300);
    else 
      this.router.navigate(["/confirm"]);
  }
}
