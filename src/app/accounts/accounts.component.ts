import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';
import { Transaction } from 'src/models/transaction';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  columns:string[]=['TranDate', 'Desc','Amount','Balance'];
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

  display(itm){
    console.log('xx');
    alert(itm);

  }

}