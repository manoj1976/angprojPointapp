import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-templmenu1',
  templateUrl: './templmenu1.component.html',
  styleUrls: ['./templmenu1.component.css']
})
export class Templmenu1Component implements OnInit {
  @Input('dataitm') dataitm:any;
  
  constructor() { }

  ngOnInit() {
  }
  
  btnEdit(){
    alert(this.dataitm.id);
  }
}
