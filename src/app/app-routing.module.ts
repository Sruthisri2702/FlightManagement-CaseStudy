import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { DashuserComponent } from './dashuser/dashuser.component';
import { DashadminComponent } from './dashadmin/dashadmin.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SampleComponent } from './sample/sample.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { BookingComponent } from './booking/booking.component';
import { AuthGaurdService } from './services/auth-gaurd.service';
import { ManagebookingComponent } from './managebooking/managebooking.component';
import { BookinghistoryComponent } from './bookinghistory/bookinghistory.component';
import { PnrComponent } from './pnr/pnr.component';
const routes: Routes = [
  {
    path:"register" ,
    component: RegisterComponent
  },
  {
    path:"adminlogin" ,
    component: AdminloginComponent
  },
  {
    path:"" ,
    component: LoginComponent
  },
  {
    path:"userlogin" ,
    component: LoginComponent
  },
  {
    path:"manageairline" ,
    component: SampleComponent,
    canActivate :[AuthGaurdService]

  },
  {
    path:"manageschedule" ,
    component: ScheduleComponent,
    canActivate :[AuthGaurdService]

  },
  {
    path:"flightbooking" ,
    component: BookingComponent,
    canActivate :[AuthGaurdService]
  },
  {
    path:"userdashboard" ,
    component: DashuserComponent,
    canActivate :[AuthGaurdService]
  },
  {
    path:"managebooking" ,
    component: ManagebookingComponent,
    canActivate :[AuthGaurdService]
  },
  {
    path:"bookinghistory" ,
    component: BookinghistoryComponent,
    canActivate :[AuthGaurdService]
  },
  {
    path:"pnrdetails" ,
    component: PnrComponent,
    canActivate :[AuthGaurdService]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [AdminloginComponent ,RegisterComponent ,LoginComponent ,DashadminComponent ,DashuserComponent ,BookingComponent ,
  ScheduleComponent ,SampleComponent, ManagebookingComponent, BookinghistoryComponent,PnrComponent]
