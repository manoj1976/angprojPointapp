import { DataService } from './../services/data.service';
import { Component } from '@angular/core';
import { Services } from '@angular/core/src/view';
import { from } from 'rxjs';
import { Transaction } from 'src/models/transaction';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'Point app';
  data:Array<Transaction>;
  constructor(private datasvc:DataService){
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

  
  trackElement(index: number, element: any) {
    return element ? element.guid : null;
  }

}