import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'Kaiyue Wu'
  password = ''
  errorMessage = 'Invalid credentials'
  invalidLogin = false

  // Router


  constructor(private router:Router,
      private hardcodedAuthenticationService:HardcodedAuthenticationService,
      private basicAuthService:BasicAuthenticationService) { }

  ngOnInit(): void {
  }

  handleLogin(){

    // console.log(this.username);
  // if(this.username==='Kaiyue Wu' && this.password==='123456'){
    if(this.hardcodedAuthenticationService.authenticate(this.username,this.password)){
    // redirect to welcome page
    this.router.navigate(['welcome',this.username])
    this.invalidLogin= false
  } else{
    this.invalidLogin=true
  }

  }

  handleJWTAuthLogin(){

    // console.log(this.username);
  // if(this.username==='Kaiyue Wu' && this.password==='123456'){
    this.basicAuthService.executeJWTAuthenticationService(this.username,this.password)
      .subscribe(
        data => {
          // console.log(data)
          // redirect to welcome page
          this.router.navigate(['welcome',this.username])
          this.invalidLogin= false
        },
        error => {
          // console.log(error)
          this.invalidLogin=true
        }
      )

  }

 


}
