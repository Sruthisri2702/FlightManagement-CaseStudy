
import { Component, OnInit ,Input } from '@angular/core';
import { InteractionService } from '../services/interaction.service';
import { FormGroup, FormBuilder, FormControl ,Validators} from '@angular/forms';
import { BookingService } from '../services/booking.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-managebooking',
  templateUrl: './managebooking.component.html',
  styleUrls: ['./managebooking.component.css']
})
export class ManagebookingComponent implements OnInit {
  public fieldArray: Array<any> = [];
  public new: any = {};
  public flightdetails : any=[];
  bindflightname : string ='';
  bindairline : string ='';
  bindplaceto : string ='';
  bindplacefrom : string ='';
  public ticketdetails: any = {};
  retrievedObject :any;
  parsedObject: any;
 // bookingModel : any;
  constructor(private _interact : InteractionService,private formBuilder: FormBuilder ,
   private _search : BookingService , private router : Router ) { }
   booking : FormGroup = this.formBuilder.group({
    ScheduleId :  new FormControl(''),
    UserId : new FormControl(''),
    Name : new FormControl('',[
      Validators.required
    ]),
    Email : new FormControl('',[
      Validators.required
    ]),
    NoofSeats : new FormControl(),
    PassengerDetails :  new FormControl('')
    //PNRNumber :  new FormControl()
  })
  ngOnInit(): void {
    
     this._interact.msgtosend.subscribe(
     data => this.flightdetails = data  
    
    );
    this.retrievedObject = localStorage.getItem('UserInfo');
    this.parsedObject = JSON.parse(this.retrievedObject);
    //console.log(this.flightdetails);
    // this.bookingModel   = new BookingModel(this.flightdetails.flightNo
    //   ,this.flightdetails.airlineName
    //   ,this.flightdetails.placeFrom
    //   ,this.flightdetails.placeTo
    //  ,'','',0,0,'');
    console.log(this.flightdetails);
    this.bindflightname = this.flightdetails.scheduleId
    this.bindairline = this.flightdetails.airlineName
    this.bindplacefrom = this.flightdetails.fromPlace
    this.bindplaceto = this.flightdetails.toPlace
   // console.log(this.bindflightname);
     }
  
    
    addFieldValue() {
      this.fieldArray.push(this.new)
      this.new = {};
  }

  deleteFieldValue(index:any) {
      this.fieldArray.splice(index, 1);
  }
  AddBooking(){
    this.booking.value.ScheduleId = parseInt(this.bindflightname) ;
    this.booking.value.UserId = this.parsedObject.id;
    this.booking.value.PassengerDetails = this.fieldArray;
    //this.booking.value.NoofSeats = 1;
    console.log(this.booking.value);  
     this._search.AddBooking(this.booking.value).subscribe((result)=>{
      console.warn(result);
      alert('Congrats! You have booked successfully! Your PNR number is: '+result);
      this.router.navigate(["pnrdetails"]);
    })
  }
  }


