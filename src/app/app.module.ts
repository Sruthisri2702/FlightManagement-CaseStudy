import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoutingComponents } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGaurdService } from './services/auth-gaurd.service';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { ErrorInterceptorService } from './services/error-interceptor.service';
import { PnrComponent } from './pnr/pnr.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    PnrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [AuthGaurdService,
    {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi :true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi :true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
