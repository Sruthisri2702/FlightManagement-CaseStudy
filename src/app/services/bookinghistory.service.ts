import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookinghistoryService {

  constructor(private http : HttpClient) { }

  getBookingHistory(email : any){
    return this.http.get<any>("http://localhost:7000/api/v1.0/flight/Booking/history?email="+email)
    .pipe(map((res:any) =>{
      return res;
    }))
}

deleteBooking(id:number){
  return this.http.delete<any>("http://localhost:7000/api/v1.0/flight/Booking/Cancel?id="+id)
  .pipe(map((res:any) =>{
    return res;
  }))
}

}
