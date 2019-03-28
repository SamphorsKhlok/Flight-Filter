import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightComponent } from './components/flight/flight.component';
import { FlightsComponent } from './components/flights/flights.component';
import { FilterPipe } from './pipes/filter.pipe';
import {HttpClientModule} from '@angular/common/http';
import { DurationPipe } from './pipes/duration.pipe';
import { MydatePipe } from './pipes/mydate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FlightComponent,
    FlightsComponent,
    FilterPipe,
    DurationPipe,
    MydatePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
