import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-view-login',
  templateUrl: './view-login.component.html',
  styleUrls: ['./view-login.component.scss']
})
export class ViewLoginComponent implements OnInit {
  
  hide = true; 
  loginForm!: FormGroup;

  constructor() { 
    this.buildForm();
  }

  ngOnInit(): void {
  }
  
  private buildForm() {
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
      rememberme: new FormControl(false),
    });

    //this.loginForm.valueChanges.subscribe(value => {console.log(value);});
  }

  save(event: Event) {
    event.preventDefault();
    const value = this.loginForm.value;
    console.log(value);
  }

}
