import { DataService } from './../services/data.service';
import { Component } from '@angular/core';
import { Services } from '@angular/core/src/view';
import { from } from 'rxjs';
import { Transaction } from 'src/models/transaction';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'Point app';
  env=environment;
  data:Array<Transaction>;
  frm:number=0;to:number=this.env.nooftablerecords;

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

  btnNext(){if (!(this.to>=this.data.length)) {this.frm+=this.env.nooftablerecords;this.to+=this.env.nooftablerecords;}}
  btnPrev(){if (!(this.frm<=0)) {this.frm-=this.env.nooftablerecords;this.to-=this.env.nooftablerecords;}}
  
  trackElement(index: number, element: any) {
    return element ? element.guid : null;
  }
}