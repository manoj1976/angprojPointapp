import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-templtbleview',
  templateUrl: './templtbleview.component.html',
  styleUrls: ['./templtbleview.component.css']
})
export class TempltbleviewComponent implements OnInit {
  @Input('columns') columns:string[];
  @Input('data') data:Array<object>;

  env=environment;
  
  frm:number=0;to:number=this.env.nooftablerecords;
  

  constructor(){
  }

  ngOnInit() {
    
  }
  

  btnNext(){if (!(this.to>=this.data.length)) {this.frm+=this.env.nooftablerecords;this.to+=this.env.nooftablerecords;}}
  btnPrev(){if (!(this.frm<=0)) {this.frm-=this.env.nooftablerecords;this.to-=this.env.nooftablerecords;}}
  
  trackElement(index: number, element: any) {
    return element ? element.guid : null;
  }

}
