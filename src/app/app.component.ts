import { DataService } from './../services/data.service';
import { Component } from '@angular/core';
import { Services } from '@angular/core/src/view';
import { from } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'Point app';
  constructor(private datasvc:DataService){

  }

  btnClick(){
    this.datasvc.getTransactions();
  }

}