import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/services/data.service';
import { AppService } from 'src/services/app.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loginForm:FormGroup;
  password:FormControl;
  username:FormControl


  constructor(
    private formBuilder: FormBuilder,
    private router:Router,
    private datasvc:DataService,
    private appsvc:AppService
    ) { 
}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.username = new FormControl('', Validators.required);
    this.password = new FormControl('', Validators.required);

    this.loginForm = new FormGroup({
      username:this.username,
      password:this.password,
    });

}

  btnLogin(){
    if (this.datasvc.signIn('m','m')) //to be changed
      this.appsvc.setUserDetails({userid:'m',accesstoken:'xyz'});
      this.router.navigate(['home']);
  }

}
