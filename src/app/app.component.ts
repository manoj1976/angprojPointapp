
import { Component } from '@angular/core';
import { FormControl, FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {

  constructor(
    private router:Router
    ) { 
    }

  btnSignup(){
    this.router.navigate(['signup']);
  }
  
  btnSignin(){
    this.router.navigate(['signin']);
  }
}