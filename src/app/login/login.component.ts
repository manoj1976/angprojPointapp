import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registerForm:FormGroup;
  firstname:FormControl;
  lastname:FormControl;
  email:FormControl;
  password:FormControl;
  username:FormControl


  /*registerForm = new FormGroup ({
    firstName: new FormControl(''),
    lastName: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),

  });
*/
  constructor(private formBuilder: FormBuilder) { 
    //this.createForm();
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
