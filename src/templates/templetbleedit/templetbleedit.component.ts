import { Component,EventEmitter, OnInit, Input, Output } from '@angular/core';
import { environment } from 'src/environments/environment';

//https://dzone.com/articles/understanding-output-and-eventemitter-in-angular -- explains the event
@Component({
  selector: 'app-templetbleedit',
  templateUrl: './templetbleedit.component.html',
  styleUrls: ['./templetbleedit.component.css']
})
export class TempletbleeditComponent implements OnInit {
  @Input('columns') columns:string[];
  @Input('data') data:Array<object>;

  @Output() onRowClicked = new EventEmitter(); //event

  
  env=environment;
  
  frm:number=0;to:number=this.env.nooftablerecords;
  selectedrow:any={id:0};

  constructor() { }

  ngOnInit() {
  }
  
  btnNext(){if (!(this.to>=this.data.length)) {this.frm+=this.env.nooftablerecords;this.to+=this.env.nooftablerecords;}}
  btnPrev(){if (!(this.frm<=0)) {this.frm-=this.env.nooftablerecords;this.to-=this.env.nooftablerecords;}}
  
  trackElement(index: number, element: any) {
    return element ? element.guid : null;
  }

  rowClick(itm:object){
    this.selectedrow=itm;
    this.onRowClicked.emit(itm);//Event
  }

  /*getColor(itm:any){
    if (itm.id===this.selectedrow.id)
      return '#29434e';
  }*/
  
  getColor(itm:any):string{
    if (itm.id===this.selectedrow.id){
      return 'table table-success';
    }
  }
  
}
