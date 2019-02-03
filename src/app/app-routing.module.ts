import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionComponent } from './transaction/transaction.component';
import { AccountsComponent } from './accounts/accounts.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import {HomeComponent} from './home/home.component';

import { from } from 'rxjs';
import { DwnloadNAVInvoiceComponent } from './dwnload-navinvoice/dwnload-navinvoice.component';

const routes: Routes = [
  {path:'trans',component:TransactionComponent},
  {path:'accounts',component:AccountsComponent},
  {path:'navinvoices',component:DwnloadNAVInvoiceComponent},
  {path:'home',component:HomeComponent},
  {path:'signup',component:SignupComponent},
  {path:'signin',component:SigninComponent},
  {path:'',component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
