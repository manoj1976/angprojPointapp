import { Pipe, PipeTransform } from '@angular/core';
import {Constants} from '../util/constants';
import { formatDate, formatNumber } from '@angular/common';
import { SessionService } from '../services/session.service';

@Pipe({
  name: 'fmt'
})
export class FmtPipe implements PipeTransform {

  constructor(private session: SessionService) { }

  transform(value: any, args?: any): any {

   // if ((args!=null) && (args.indexOf(':')!=-1))
      return   this.getFormat(value,args);
    //else
      return value;
  }

  private getFormat(value,args){
    /*let dotpos=args.indexOf(':');
    let var2=args.substring(dotpos,args.length);
    if (var2==':D' ||var2==':d') //Date
      return formatDate(value,Constants.DATE_FMT,this.session.locale);
    else
      return value
  */
 let varcoltype=this.columnFormat(args);
  if (varcoltype==null)
    return value;
  else if (varcoltype=='D' ||varcoltype=='d') //Date
    return formatDate(value,Constants.DATE_FMT,this.session.locale);
  else if (varcoltype=='N' ||varcoltype=='n') //Date
    return formatNumber(value,this.session.locale,'1.2');

  }

private columnFormat(parcolname:string):any{
  let colfrm:object={
    TranDate:'D',
    Balance:'N',
    Amount:'N'
  }
  if (colfrm[parcolname]!==null) return colfrm[parcolname];

  return null
}


}
