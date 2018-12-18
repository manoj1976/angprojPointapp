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

  @Output() rowSelected = new EventEmitter(); //event


  env=environment;
  
  frm:number=0;to:number=this.env.nooftablerecords;
  selectedrow:object={id:1};

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
    
    this.rowSelected.emit(this.selectedrow);//Event
    console.log('clickedd');
  }

  getColor(itm:object){
    if (itm.id==this.selectedrow.id)
      return '#29434e';
  }

}
