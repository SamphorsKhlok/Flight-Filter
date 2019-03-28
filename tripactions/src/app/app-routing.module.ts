import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FlightsComponent} from './components/flights/flights.component';

const routes: Routes = [
  {path: '', redirectTo: '/flights', pathMatch: 'full'},
  {path: 'flights', component: FlightsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
