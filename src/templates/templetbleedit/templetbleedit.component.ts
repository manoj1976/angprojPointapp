import { Component,EventEmitter, OnInit, Input, Output } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AppService } from 'src/services/app.service';
import { FmtPipe } from 'src/pipes/fmt.pipe';
import { SessionService } from 'src/services/session.service';

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
  
  frm:number=0;to:number=this.env.nooftablerecords;pageno:number=1;
  selectedrow:any={id:0};

  constructor(private appsvc:AppService,private session: SessionService){
    
  }
  ngOnInit() {
  }
  
 // btnNext(){if (!(this.to>=this.data.length)) {this.frm+=this.env.nooftablerecords;this.to+=this.env.nooftablerecords;}}
 // btnPrev(){if (!(this.frm<=0)) {this.frm-=this.env.nooftablerecords;this.to-=this.env.nooftablerecords;}}
  
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

  btnPrev(){
    let refvar=[{frm:this.frm,to:this.to,pageno:this.pageno}];
    this.appsvc.btnPrev(this.data.length,refvar);
    this.pageno =refvar[0].pageno;this.frm=refvar[0].frm;this.to=refvar[0].to;
  }

  btnNext(){
    let refvar=[{frm:this.frm,to:this.to,pageno:this.pageno}];
    this.appsvc.btnNext(this.data.length,refvar);
    this.pageno =refvar[0].pageno;this.frm=refvar[0].frm;this.to=refvar[0].to;
  }
  
  btnFirst(){
    let refvar=[{frm:this.frm,to:this.to,pageno:this.pageno}];
    this.appsvc.btnFirst(this.data.length,refvar);
    this.pageno =refvar[0].pageno;this.frm=refvar[0].frm;this.to=refvar[0].to;     
  }


  btnLast(){
    let refvar=[{frm:this.frm,to:this.to,pageno:this.pageno}];
    this.appsvc.btnLast(this.data.length,refvar);
    this.pageno =refvar[0].pageno;this.frm=refvar[0].frm;this.to=refvar[0].to;     
  }

  getColumnAlignStyle(parcolname:string){
    let fmtpipe:FmtPipe=new FmtPipe(this.session);
    return fmtpipe.getColumnAlignStyle(parcolname);
  }
  
  getColor(itm:any):string{
    if (itm.id===this.selectedrow.id){
      return this.env.tblselectedrowclass;
    }
  }
  
}
