import { Component, OnInit } from '@angular/core';


import { DataService } from 'src/services/data.service';
import { AppErrorHandlerService } from 'src/services/app-error-handler.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  columns:string[]=['Code', 'Name','Address1','City','County'];
  pagecaption:string='Accounts'
  data:any;dataitm:any={};
  
  constructor(
    private datasvc:DataService,
    private errsvc:AppErrorHandlerService,
    ){
  }

  ngOnInit() {
    this.btnClick();
  }
  
  btnClick(){
    this.datasvc.getAccounts()
    .subscribe((data) =>{ 
      this.data=data;
      if ((this.data!=null) && (this.data!=undefined)) this.dataitm=data[0];
  },
  error=>{      
    this.errsvc.errorHandler(error,true);
  });
  }

  selecteditm(itm:any):void{
    this.dataitm=itm;
  }

  onRefresh(itm:any):void{
    this.btnClick();

  }

}
