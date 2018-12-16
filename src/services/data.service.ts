import { Injectable }    from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
//import { Observable } from 'rxjs/Rx';
//import 'rxjs/add/operator/catch';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map'
import * as Rx from "rxjs";
import { HttpClient } from '@angular/common/http';
import { appInitializerFactory } from '@angular/platform-browser/src/browser/server-transition';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http :Http) {}

  getTransactions(){
    var varBaseURL=this.getBaseURL()+'Transactions?id=4&pageid=1';
       return this.http.get(varBaseURL).map((res: Response) => res.json());
  }

  getBaseURL(){
   //return 'http://localhost:61010/api/';
   return '/api/'
  }

}
