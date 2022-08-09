import { Login } from './../login';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  formCad: FormGroup

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm(new Login())
  }

  createForm(log: Login){
    this.formCad = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]]
      user: ['', []]
    })
  }
}
