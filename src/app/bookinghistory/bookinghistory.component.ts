import { Component, OnInit } from '@angular/core';
import { BookinghistoryService } from '../services/bookinghistory.service';
import { FormBuilder,FormGroup,FormControl} from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-bookinghistory',
  templateUrl: './bookinghistory.component.html',
  styleUrls: ['./bookinghistory.component.css']
})
export class BookinghistoryComponent implements OnInit {
  bookingHistory ! :any;
  constructor(private history : BookinghistoryService,private formbuilder : FormBuilder) { }
  
  searchByEmail : FormGroup = this.formbuilder.group({
    Email : new FormControl('',[
      Validators.required
    ])
  })

  ngOnInit(): void {
    
    //this.GetBookingHistory();
  }

  GetBookingHistory(){

    this.history.getBookingHistory(this.searchByEmail.value.Email).subscribe(
      data => {
        this.bookingHistory = data; 
        console.log('>>',this.bookingHistory)
    });

  }
  DeleteBooking(row: any){
    this.history.deleteBooking(row.bookingId).subscribe(
      data => {alert("Booking Cancelled!");
      this.GetBookingHistory();
    }
    )

  }

}
