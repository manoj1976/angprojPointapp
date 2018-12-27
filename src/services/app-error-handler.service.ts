import { Injectable } from '@angular/core';
import * as HttpStatus from 'http-status-codes';
import { ToastrService } from 'ngx-toastr';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AppErrorHandlerService {

  constructor(private toastr: ToastrService) { }
  
  errorHandler(parerror:any,showmsg:boolean){
    let v1=parerror._body
    let v2=JSON.parse(v1);
    let str1='error'
    if (v2.ExceptionMessage!=null)
      str1=v2.ExceptionMessage;
    else if (v2.Message!=null)
      str1=v2.Message;

      if (showmsg)
        this.displayToastMsg(str1,'E');
    
  }

  displayToastMsg(msg:string,msgtype:string){
switch (msgtype){
  case 'S':
     this.toastr.success(msg);break;
  case 'E':
      this.toastr.error(msg);break;
  case 'W':
      this.toastr.warning(msg);break;
   case 'I':
      this.toastr.info(msg);break;
  }
}
}
