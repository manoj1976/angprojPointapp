import { Injectable }    from '@angular/core';
import { Headers, Http, Response, ResponseContentType, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map'
import * as Rx from "rxjs";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { appInitializerFactory } from '@angular/platform-browser/src/browser/server-transition';
import { Params } from '@angular/router';
import { HttpParamsOptions } from '@angular/common/http/src/params';
import { AppService } from './app.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http :Http,
    private httpclient:HttpClient,
    private appsvc:AppService
    ) {}

  getTransactions(): any{
    //var varBaseURL=this.getBaseURL()+'Transactions?id=4&pageid=1';
    //   return this.http.get(varBaseURL).map((res: Response) => res.json());
    var varBaseURL=this.getBaseURL()+'Transactions';
    let headers:HttpHeaders=this.appsvc.getHttpRequestHeader();
    let params:HttpParams = new HttpParams();
    
     params = new HttpParams({
      fromObject: {
        id: '4',
        pageid:'1'
      }
    });
    return this.httpclient.get(varBaseURL,{headers:headers,params:params});


  }

  getAccounts(){
   var varBaseURL=this.getBaseURL()+'Accounts';

    /*let headers:HttpHeaders  = new HttpHeaders(
      {
        'Accept': 'application/json',
        'Authorization': 'Basic'
      }
    );
*/
    let headers:HttpHeaders=this.appsvc.getHttpRequestHeader();
    let params:HttpParams = new HttpParams();
    
     params = new HttpParams({
      fromObject: {
        id: '4',
        pageid:'1'
      }
    });

       /*return this.http.get(varBaseURL)
        .map((res: Response) => res.json());
      */
      return this.httpclient.get(varBaseURL,{headers:headers,params:params});
        
  }

  signIn(userid:string,pwd:string):boolean{ //to be changed -- call api and validate userid -- return the access token

    return true;
  }

  getBaseURL(){
   //return 'http://localhost:61010/api/';
   return '/api/'
  }

}
