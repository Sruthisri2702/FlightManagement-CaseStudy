import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor(private http : HttpClient) { }
  addAirline(data:any){
    return this.http.post<any>("http://localhost:7000/api/v1.0/flight/airline/register",data)
    .pipe(map((res:any) =>{
      return res;
    }))
  }

    getAllAirline(){
      return this.http.get<any>("http://localhost:7000/api/v1.0/flight/airline/getall")
      .pipe(map((res:any) =>{
        return res;
      }))
  }

  deleteAirline(id:number){
    return this.http.delete<any>("http://localhost:7000/api/v1.0/flight/airline/block?id="+id)
    .pipe(map((res:any) =>{
      return res;
    }))
  }

}
