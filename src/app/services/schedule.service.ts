import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private http : HttpClient) { }
  
  addSchedule(data:any): Observable<any>{
    return this.http.post<any>("http://localhost:7000/api/v1.0/flight/inventory/add",data)
    .pipe(map((res:any) =>{
      return res;
    }))
  }

    getAllSchedule(){
      return this.http.get<any>("http://localhost:7000/api/v1.0/flight/schedule/getall")
      .pipe(map((res:any) =>{
        return res;
      }))
  }

  deleteSchedule(id:number){
    return this.http.delete<any>("http://localhost:7000/api/v1.0/flight/schedule/delete?id="+id)
    .pipe(map((res:any) =>{
      return res;
    }))
  }
}
