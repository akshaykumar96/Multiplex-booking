import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search.component';
import { ResultComponent } from "./result.component";
import { DetailsComponent } from "./details.component";
const routes: Routes = [
 {path:"result/:search",component:ResultComponent},
{path:"details/:id",component:DetailsComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchingRoutingModule { }
