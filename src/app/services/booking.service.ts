import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http : HttpClient) { }

  searchSchedule(from:string ,to:string): Observable<any>{
    return this.http.get<any>("http://localhost:7000/api/v1.0/flight/search?from="+from+"&to="+to)
    .pipe(map((res:any) =>{
      return res;
    }))
  }

  AddBooking(data:any) {
    return this.http.post<any>("http://localhost:7000/api/v1.0/flight/Booking",data)
  }

}