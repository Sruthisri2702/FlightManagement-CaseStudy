import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { BookingService } from '../services/booking.service';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InteractionService } from '../services/interaction.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  formValue !: FormGroup;
  searchResult !: any;

    constructor(private _booking : BookingService,
      private formbuilder : FormBuilder,private router : Router,private _interact :InteractionService)
       { }
  
      searchFlight : FormGroup = this.formbuilder.group({
        fromplace : new FormControl('',[
          Validators.required
        ]),
        toplace : new FormControl('',[
          Validators.required
        ])
      })

  ngOnInit(): void {
    

  }
  
SearchSchedule(){
  this._booking.searchSchedule(this.searchFlight.value.fromplace, this.searchFlight.value.toplace).subscribe(
    data => {this.searchResult = data, console.log(this.searchResult)});
  
}


Book(sch : any){
  this._interact.sendmessage(sch);
  this.router.navigate(["managebooking"]);
 }
}
