import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AppService } from 'src/services/app.service';

@Component({
  selector: 'app-templtbleview',
  templateUrl: './templtbleview.component.html',
  styleUrls: ['./templtbleview.component.css']
})
export class TempltbleviewComponent implements OnInit {
  @Input('columns') columns:string[];
  @Input('data') data:Array<object>;

  env=environment;en_prevbtn=true;en_nextbtn=true;
  
  frm:number=0;to:number=this.env.nooftablerecords;pageno:number=1;
  

  constructor(private appsvc:AppService){
    
  }

  ngOnInit() {
  }
  
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

    
  trackElement(index: number, element: any) {
    return element ? element.guid : null;
  }

}
