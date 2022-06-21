import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {
  private sendmessageto = new BehaviorSubject<any>("default");
  msgtosend = this.sendmessageto.asObservable();
  constructor() { }

  sendmessage(message:any){
    this.sendmessageto.next(message);
  }
}
