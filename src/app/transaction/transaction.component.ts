import { Component, OnInit } from '@angular/core';
import { Services } from '@angular/core/src/view';
import { from } from 'rxjs';

import { DataService } from '../../services/data.service';
import { AppErrorHandlerService } from 'src/services/app-error-handler.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  columns:string[]=['TranDate', 'Desc','Amount','Balance'];
  pagecaption:string='Transactions'

  data:{};
  
 
  constructor(
    private datasvc:DataService,
    private errsvc:AppErrorHandlerService,
    ){
  }


  ngOnInit() {
    this.btnClick();
  }
  
  btnClick(){
    this.datasvc.getTransactions()
    .subscribe((data) =>{ 
      this.data=data;
  },
  error=>{      
    this.errsvc.errorHandler(error,true);
  });
  }

  onRefresh(itm:any):void{
    this.btnClick();

  }

}
