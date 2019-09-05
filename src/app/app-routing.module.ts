import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { ReturnpageComponent } from './returnpage/returnpage.component';


const routes: Routes = [
  {path: "frontpage", component: FrontpageComponent},
  {path: "returnpage", component: ReturnpageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
