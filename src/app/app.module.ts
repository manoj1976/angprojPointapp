import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransactionComponent } from './transaction/transaction.component';
import { TempltbleviewComponent } from '../templates/templtbleview/templtbleview.component';
import { Templmenu1Component } from '../templates/templmenu1/templmenu1.component';
import { TempletbleeditComponent } from '../templates/templetbleedit/templetbleedit.component';
import { AccountsComponent } from './accounts/accounts.component';

@NgModule({
  declarations: [
    AppComponent,
    TransactionComponent,
    TempltbleviewComponent,
    Templmenu1Component,
    TempletbleeditComponent,
    AccountsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
