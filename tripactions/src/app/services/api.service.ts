import { Injectable } from '@angular/core';
// import * as flights from "./data.json";
import {Observable, of} from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  BASE_URL = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }
  getFlights() {
    return this.http.get<any>(this.BASE_URL);
  }
}
