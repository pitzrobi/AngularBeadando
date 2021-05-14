import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:string;
  pass:string;
  constructor(private router:Router) {
    this.user = "";
    this.pass = "";
    if(localStorage.getItem("user")) this.router.navigate(['/list']);
  }

  ngOnInit(): void {
  }

  Login(user:string, pass:string){
    if(this.LoginValues(user, pass)){
      if(user == "user" && pass == "pass"){
        this.router.navigate(['/list']);
        localStorage.setItem("user", "admin");
      }
      else alert("Invalid user");
    }
    else alert("Fields can't be empty");
  }

  LoginValues(user:string, pass:string){
    if(user.length > 0
      && pass.length > 0)
      return true;
    else return false;
  }

}
