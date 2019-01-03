import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  env=environment;

  constructor() { }

  btnPrev(datalength:number,refvar:any){
    if (!(refvar[0].frm<=0)) {
      refvar[0].frm-=this.env.nooftablerecords;
      refvar[0].to-=this.env.nooftablerecords;
      refvar[0].pageno -=1;
    }
  }

  btnNext(datalength:number,refvar:any){
    if (!(refvar[0].to>=datalength)) {
      refvar[0].frm+=this.env.nooftablerecords;
      refvar[0].to+=this.env.nooftablerecords;
      refvar[0].pageno +=1;
    }
  }


  btnLast(datalength:number,refvar:any){ //passing as reference
    let frm1:number=refvar[0].frm, to1:number=refvar[0].to;
    for(let i=1;i<datalength;i++){
      refvar[0].pageno +=1;
      frm1+=this.env.nooftablerecords;
      to1+=this.env.nooftablerecords;
      if (to1>=datalength) {
        refvar[0].frm=frm1;
        refvar[0].to=to1;
        break;
      }
    }
  }

  btnFirst(datalength:number,refvar:any){ //passing as reference
    let frm1:number=refvar[0].frm, to1:number=refvar[0].to;
    for(let i=1;i<datalength;i++){
      refvar[0].pageno -=1;
      frm1-=this.env.nooftablerecords;
      to1-=this.env.nooftablerecords;
      if (frm1<=0) {
        refvar[0].frm=frm1;
        refvar[0].to=to1;
        break;
      }
    }
  }
  private userdet:any;private httpheaders:HttpHeaders;

  setUserDetails(paruser:any){
    this.userdet=paruser;
    //this.appsvc.setHttpRequestHeader()
    this.setHttpRequestHeader();
    }
  
    setHttpRequestHeader():void{
        this.httpheaders  = new HttpHeaders(
        {
          'Accept': 'application/json',
          'Authorization': 'Bearer '+this.userdet.accesstoken
        }
      );
    }
  
    getHttpRequestHeader():HttpHeaders{
  
      return this.httpheaders;
    }

}



