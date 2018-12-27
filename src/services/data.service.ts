import { Injectable }    from '@angular/core';
import { Headers, Http, Response, ResponseContentType, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
//import 'rxjs/add/operator/catch';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map'
import * as Rx from "rxjs";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { appInitializerFactory } from '@angular/platform-browser/src/browser/server-transition';
import { Params } from '@angular/router';
//import { Transaction } from 'src/models/transaction';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http :Http) {}

  getTransactions(): any{
    var varBaseURL=this.getBaseURL()+'Transactions?id=4&pageid=1';
       return this.http.get(varBaseURL).map((res: Response) => res.json());
  }

  getAccounts(){
    var varBaseURL=this.getBaseURL()+'Accounts';//?id=4&pageid=1';

    let headers:Headers = new Headers();
    headers.append('Accept', 'application/json');
    let params:URLSearchParams = new URLSearchParams();
    params.append('id','4');
    params.append('pageid','1');
    let options = new RequestOptions({ headers: headers, params: params });

    /*   return this.http.get(varBaseURL,
        {
          headers:headers,
          params: params, 
          responseType: ResponseContentType.Json        }
        )
        .map((res: Response) => res.json());*/
        
       return this.http.get(varBaseURL,options
        )
        .map((res: Response) => res.json());
  }

  getBaseURL(){
   //return 'http://localhost:61010/api/';
   return '/api/'
  }

}
