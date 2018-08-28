import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { BookComponent } from './book.component';
import { ConfirmationComponent } from './confirmation.component';
import { PaymentComponent } from './payment.component';
import { SelectShowComponent } from './select-show.component';
import { SearchingModule } from '../searching/searching.module';
import { FormsModule } from '@angular/forms';
import { LoadingPageComponent } from './loading-page.component';

@NgModule({
  imports: [
    CommonModule, FormsModule,
    BookingRoutingModule, SearchingModule
  ],
  declarations: [BookComponent,ConfirmationComponent,PaymentComponent, SelectShowComponent,LoadingPageComponent],
  exports: [BookComponent,ConfirmationComponent,PaymentComponent, SelectShowComponent,LoadingPageComponent],
  providers:[DatePipe]
 
})
export class BookingModule { }
