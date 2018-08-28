import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { LoginComponent } from './login.component';
import { SignupComponent } from './signup.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RegisterRoutingModule,FormsModule
  ],
  declarations: [ LoginComponent, SignupComponent  ],
  exports: [ LoginComponent, SignupComponent  ]
})
export class RegisterModule { }
