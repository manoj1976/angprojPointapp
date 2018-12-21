import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-templpageheading',
  templateUrl: './templpageheading.component.html',
  styleUrls: ['./templpageheading.component.css']
})
export class TemplpageheadingComponent implements OnInit {
  @Input('pagecaption') pagecaption:string;
  @Output() onRefreshClicked = new EventEmitter(); //event

  constructor() { }

  ngOnInit() {
  }

  btnRefresh(){
    this.onRefreshClicked.emit();//Event
  }
}
