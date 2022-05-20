import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor{
  
  constructor(
    private basicAuthService: BasicAuthenticationService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler){
    // let username = "Kaiyue Wu";
    // let password = "123456";
    //let basicAuthHeaderString = 'Basic ' + window.btoa(username +":" +  password);
    
    let basicAuthHeaderString = this.basicAuthService.getAuthenticatedToken();
    let username = this.basicAuthService.getAuthenticatedUser();

    if(basicAuthHeaderString && username){
    req = req.clone({
      setHeaders: {
        Authorization: basicAuthHeaderString
      }
    })
  }
    return next.handle(req)
  }


 
}
