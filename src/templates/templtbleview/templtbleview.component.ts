import { Component, OnInit, Input } from '@angular/core';
import { Services } from '@angular/core/src/view';
import { from } from 'rxjs';
import { Transaction } from 'src/models/transaction';
import { environment } from 'src/environments/environment';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-templtbleview',
  templateUrl: './templtbleview.component.html',
  styleUrls: ['./templtbleview.component.css']
})
export class TempltbleviewComponent implements OnInit {
//  @Input() hero: Hero;
  @Input('master') masterName: string;

  constructor(private datasvc:DataService){
  }


  ngOnInit() {
    this.btnClick();
  }
  
  env=environment;
  data:Array<Transaction>;
  columns:string[]=['TranDate', 'Desc','Amount','Balance'];
  
  
  frm:number=0;to:number=this.env.nooftablerecords;

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
