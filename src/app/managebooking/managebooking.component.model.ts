export class BookingModel{
    constructor(
       
        public FlightNo : string,
        public AirlineName : string ,
        public PlaceFrom :string,
        public PlaceTo :string,
        public Name : string,
        public Email : string,
        public NofSeats : number,
        public Id : number,
        public Passengers : any
        
    ) {}
}
