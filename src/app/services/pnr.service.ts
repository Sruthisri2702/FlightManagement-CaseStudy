import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PnrService {

  constructor(private http : HttpClient) { }

  searchByPnr(pnr:any): Observable<any>{
    return this.http.get<any>("http://localhost:7000/api/v1.0/flight/ticket?pnr="+pnr)
    .pipe(map((res:any) =>{
      return res;
    }))
  }

}
