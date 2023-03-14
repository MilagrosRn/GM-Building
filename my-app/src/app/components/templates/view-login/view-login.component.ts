import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-view-login',
  templateUrl: './view-login.component.html',
  styleUrls: ['./view-login.component.scss']
})
export class ViewLoginComponent implements OnInit {
  
  hide = true;
  loginForm:FormGroup | undefined;

  constructor() { }

 

  ngOnInit(): void {
     
   

  }

}
