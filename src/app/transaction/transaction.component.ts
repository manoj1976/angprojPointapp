import { Component, OnInit } from '@angular/core';
import { Services } from '@angular/core/src/view';
import { from } from 'rxjs';
import { Transaction } from 'src/models/transaction';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  columns:string[]=['TranDate', 'Desc','Amount','Balance'];
  pagecaption:string='Transactions'

  data:Array<Transaction>;
  
 
  constructor(private datasvc:DataService){
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
    alert('error');
  });
  }

  onRefresh(itm:any):void{
    this.btnClick();

  }

}
