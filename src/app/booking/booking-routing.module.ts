import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfirmationComponent } from './confirmation.component';
import { BookComponent } from './book.component';
import { SelectShowComponent } from './select-show.component';
import { FormsModule } from '@angular/forms';
import { LoadingPageComponent } from "./loading-page.component";


const routes: Routes = [

  {path:"payment/:id",component:BookComponent},
  {path:"confirm", component:ConfirmationComponent},
  {path:"loading",component:LoadingPageComponent}, 
   {path:"select/:id",  component:SelectShowComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule { }
