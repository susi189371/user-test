import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { DataServiceService } from './../services/data-service.service';
import { from } from 'rxjs';
import { Router } from '@angular/router';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  options: FormGroup;
  public dataLocal;


  constructor(fb: FormBuilder, private service: DataServiceService, private router : Router) {
    this.options = fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  submitEdit() {
    const data = {
      "email": this.options.value.email,
      "password": this.options.value.password
    }
    this.service.login(data).subscribe(res => {
      this.dataLocal = localStorage.setItem('local', res['data']['token']);
      this.router.navigate(['/list-user']);
    })
  }

}
