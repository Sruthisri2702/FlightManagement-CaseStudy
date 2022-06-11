import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { AirlineModel } from './sample.component.model';
import { SampleService } from '../services/sample.service';
@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  formValue !: FormGroup;
  airlineDetails !: any;

  airlineModelObj : AirlineModel = new AirlineModel();
  constructor(private formBuilder: FormBuilder, private _airlineData: SampleService) 
  { 
      // this._airlineData.getAllAirlines().subscribe(
      //   data => {this.airlineDetails = data , console.log(this.airlineDetails)});
  }


  ngOnInit(): void {
    this.formValue = this.formBuilder.group(
      {
        AirlineName :[''],
        ContactNumber :[''],
        ContactAddress :[''],
        DisCode:[''],
        DisAmount:[''],
        logo:['']
      })
      this.getAllAirline();
  }

  AddAirline(){
    this.airlineModelObj.AirlineName= this.formValue.value.AirlineName;
    this.airlineModelObj.ContactNumber= this.formValue.value.ContactNumber;
    this.airlineModelObj.ContactAddress= this.formValue.value.ContactAddress;
    this.airlineModelObj.DisCode= this.formValue.value.DisCode;
    this.airlineModelObj.DisAmount= this.formValue.value.DisAmount;
    this.airlineModelObj.logo= this.formValue.value.logo;

    this._airlineData.addAirline(this.airlineModelObj).subscribe
    ((result) => {console.log(result)});
      alert("Airline added successfully");
      this.getAllAirline();

  }

  getAllAirline(){

//     1: {airlineId: 1013, airlineName: "Royals", contactNumber: "893055", contactAddress: "Pune",…}
// airlineId: 1013
// airlineName: "Royals"
// blocked: null
// contactAddress: "Pune"
// contactNumber: "893055"
// disAmount: null
// disCode: null
// logo: "RoyalAirlines"
// schedules: null

    this._airlineData.getAllAirline().subscribe(
      data => {
        this.airlineDetails = data; 
        console.log('>>',this.airlineDetails)
    });

  }
  blockAirline(row: any){
    this._airlineData.deleteAirline(row.airlineId).subscribe(
      data => {alert("Airline deleted");
      this.getAllAirline();
    }
    )

  }
}
