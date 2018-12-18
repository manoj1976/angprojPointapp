import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templmenu1',
  templateUrl: './templmenu1.component.html',
  styleUrls: ['./templmenu1.component.css']
})
export class Templmenu1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  btnEdit(){
    alert('a');
  }

  display(itm){
    console.log('xx');
    alert(itm);

  }
}
