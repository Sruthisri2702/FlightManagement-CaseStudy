import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ScheduleModel } from './schedule.component.model';
import { ScheduleService } from '../services/schedule.service';
import { SampleService } from '../services/sample.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  formValue !: FormGroup;
  scheduleDetails !: any;
  airlineDetails: any;

  scheduleModelObj : ScheduleModel = new ScheduleModel();
  constructor(
    private formBuilder: FormBuilder, 
    private _scheduleData: ScheduleService,
    private _airlineData: SampleService)
  
  { 
      
  }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group(
      {
        FlightNumber :[''],
        AirlineId:[''],
        FromPlace :[''],
        ToPlace :[''],
        StartDateTime:new Date(),
        EndDateTime:new Date(),
        TotalCost:[''],
        Rows:[''],
        Meal:[''],
        ScheduledDays:[''],
        InstrumentUsed:[''],
        BusinessSeats:[''],
        NonBusinessSeats:[''],
        
      })
      this.fetchAirlines();
      this.GetAllSchedule();
      
  }

  fetchAirlines(){
    this._airlineData.getAllAirline().subscribe(
      data => {
        this.airlineDetails = data; 
        console.log('>>',this.airlineDetails)
    });
  }

  onChangeAirline(e: any){
    console.log(e.target.value);
    this.formValue.patchValue({
      AirlineId: Number(e.target.value)
    });
    //this.AddSchedule();
  }

  AddSchedule(){

    //console.log(this.formValue);
    //console.log('Form data');


    this.scheduleModelObj.FlightNumber= this.formValue.value.FlightNumber;
    this.scheduleModelObj.AirlineId = this.formValue.value.AirlineId;
    this.scheduleModelObj.FromPlace= this.formValue.value.FromPlace;
    this.scheduleModelObj.ToPlace= this.formValue.value.ToPlace;
    this.scheduleModelObj.StartDateTime=this.formValue.value.StartDateTime;
    this.scheduleModelObj.EndDateTime=this.formValue.value.EndDateTime;
    this.scheduleModelObj.TotalCost= this.formValue.value.TotalCost;
    this.scheduleModelObj.Rows= this.formValue.value.Rows;
    this.scheduleModelObj.Meal= this.formValue.value.Meal;
    this.scheduleModelObj.ScheduledDays = this.formValue.value.ScheduledDays;
    this.scheduleModelObj.InstrumentUsed = this.formValue.value.InstrumentUsed;
    this.scheduleModelObj.BusinessSeats = this.formValue.value.BusinessSeats;
    this.scheduleModelObj.NonBusinessSeats = this.formValue.value.NonBusinessSeats;


    this._scheduleData.addSchedule(this.scheduleModelObj).subscribe
    ((result) => {console.log(result)});
      alert("Schedule added successfully");
     console.log(this.scheduleModelObj);
      this.GetAllSchedule();
  }

  GetAllSchedule(){

    this._scheduleData.getAllSchedule().subscribe(
      data => {this.scheduleDetails = data , console.log(this.scheduleDetails)});

  }
  DeleteSchedule(sch : any){
    this._scheduleData.deleteSchedule(sch.scheduleId).subscribe(
      data => {alert("Schedule deleted");
      this.GetAllSchedule();
    }
    )

  }
  
}
