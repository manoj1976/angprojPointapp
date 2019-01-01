import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder,Validators } from '@angular/forms';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerForm:FormGroup;
  firstname:FormControl;
  lastname:FormControl;
  email:FormControl;
  password:FormControl;
  username:FormControl


  constructor(
    private formBuilder: FormBuilder,
    private router:Router
    ) { 
}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    /*
    this.registerForm = this.formBuilder.group({
      firstName: this.formBuilder.control('',Validators.required),
      lastName: '',
      email:'',
      password:''

    });*/
    this.firstname = new FormControl('', Validators.required);
    this.lastname = new FormControl('', Validators.required);
    this.email = new FormControl('', Validators.required);
    this.username = new FormControl('', Validators.required);
    this.password = new FormControl('', Validators.required);

    this.registerForm = new FormGroup({
      firstname: this.firstname,
      lastname:this.lastname,
      email:this.email,
      username:this.username,
      password:this.password,
    });

}

btnRegister(){
  alert('a');
}


}
