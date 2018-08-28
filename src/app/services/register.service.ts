
import { Injectable } from '@angular/core';
import { UserModel } from "../models/user-model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { LoginModel } from '../models/login-model';

//import { create } from 'domain';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {


  userList: UserModel[];


  constructor(private http: HttpClient) {
    
   }

  userUrl:string="http://18.136.65.50:9008/register/"

  create(item:UserModel){
    let body= JSON.stringify(item);
    let httpOptions={
      headers: new HttpHeaders({
        "Content-Type":"application/json"
      })
    }

    return this.http.post(this.userUrl,body,httpOptions);
  }

  
  
}