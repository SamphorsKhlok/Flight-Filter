import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {
  flights: any[];
  airlines: any[] = [];
  filterList: string[] = [];
  map = new Map<any, any>();
  constructor(private api: ApiService) {

    this.api.getFlights().subscribe(
      (res: any) => this.flights = res,
      error => console.error(error),
      () => this.getAirlines());
  }

  ngOnInit() {
  }

  getAirlines() {
    for (const f of this.flights){
      this.map.set(f['flight']['flightSegments'][0]['airlineName'], f['startingPrice']['basePrice']);
    }

    for (const [key, value] of this.map) {
      this.airlines.push({label: key, price: value, checked: false});
    }
  }

  updateFilter(i) {
    this.airlines[i].checked = !this.airlines[i].checked;
    this.filterList = this.airlines.filter(item => item.checked === true).map(item => item.label);
  }

}
