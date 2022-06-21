export class ScheduleModel{
    FlightNumber: string ='';
    AirlineId : number = 0;
    FromPlace : string ='';
    ToPlace : string ='';
    StartDateTime = new Date();
    EndDateTime = new Date();    
    TotalCost: number = 0;
    Meal : string ='';
    ScheduledDays : string ='';
    InstrumentUsed : string ='';
    BusinessSeats : number = 0;
    NonBusinessSeats : number = 0;
    Rows : number = 0;
}