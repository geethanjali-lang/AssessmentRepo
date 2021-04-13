import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms' ; 
import { ReactiveFormsModule} from '@angular/forms';
import { OrdersComponent } from './orders/orders.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'; 
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CookieModule } from 'ngx-cookie';





@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    LoginComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
   
    HttpClientModule,
    NgbModule ,
    
    CookieModule.forRoot(),
     

  ],
  providers: [CookieModule],
  entryComponents:[],

  bootstrap: [AppComponent]
})
export class AppModule { }
