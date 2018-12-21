import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';
import { Transaction } from 'src/models/transaction';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  columns:string[]=['Code', 'Name','Address1','City','County'];
  pagecaption:string='Accounts'
  data:Array<Transaction>;dataitm:any={};
  
  constructor(private datasvc:DataService){
  }

  ngOnInit() {
    this.btnClick();
  }
  
  btnClick(){
    this.datasvc.getAccounts()
    .subscribe((data) =>{ 
      this.data=data;
      if (!(this.data===null)) this.dataitm=data[0];
  },
  error=>{      
    alert('error');
  });
  }

  selecteditm(itm:any):void{
    this.dataitm=itm;
  }

  onRefresh(itm:any):void{
    alert('te');
    this.btnClick();

  }
}
