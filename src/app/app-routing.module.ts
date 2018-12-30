import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionComponent } from './transaction/transaction.component';
import { AccountsComponent } from './accounts/accounts.component';
import { LoginComponent } from './login/login.component';
import {HomeComponent} from './home/home.component';

import { from } from 'rxjs';

const routes: Routes = [
  {path:'trans',component:TransactionComponent},
  {path:'accounts',component:AccountsComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
