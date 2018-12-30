import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';//For toast message
import { ToastrModule } from 'ngx-toastr'; //For toast message

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransactionComponent } from './transaction/transaction.component';
import { TempltbleviewComponent } from '../templates/templtbleview/templtbleview.component';
import { Templmenu1Component } from '../templates/templmenu1/templmenu1.component';
import { TempletbleeditComponent } from '../templates/templetbleedit/templetbleedit.component';
import { TemplpageheadingComponent } from '../templates/templpageheading/templpageheading.component';
import { FmtPipe } from '../pipes/fmt.pipe';

import { AccountsComponent } from './accounts/accounts.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    TempltbleviewComponent,
    Templmenu1Component,
    TempletbleeditComponent,
    TemplpageheadingComponent,
    FmtPipe,
    TransactionComponent,
    AccountsComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, //required for ToastrModule added
    ToastrModule.forRoot() // ToastrModule added

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
