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


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http :Http,private httpclient:HttpClient) {}

  getTransactions(): any{
    var varBaseURL=this.getBaseURL()+'Transactions?id=4&pageid=1';
       return this.http.get(varBaseURL).map((res: Response) => res.json());
  }

  getAccounts(){
   var varBaseURL=this.getBaseURL()+'Accounts';

    let headers:HttpHeaders  = new HttpHeaders(
      {
        'Accept': 'application/json',
        'Auth': 'Basic'
      }
    );

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

  getBaseURL(){
   //return 'http://localhost:61010/api/';
   return '/api/'
  }

}
