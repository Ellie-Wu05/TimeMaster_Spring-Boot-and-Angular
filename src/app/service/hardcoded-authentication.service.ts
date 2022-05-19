import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username:string,password:any){
    // console.log(this.isUserLoggedIn());
    if(username==='Kaiyue Wu' && password==='123456'){
      sessionStorage.setItem('authenticatedUser',username)
      // console.log(this.isUserLoggedIn());
      return true;
  } else {
    return false
  }
}

isUserLoggedIn(){
  let user = sessionStorage.getItem('authenticatedUser');
  return !(user == null)

}

UserLoggedOut(){
  sessionStorage.removeItem('authenticatedUser')
}
}
