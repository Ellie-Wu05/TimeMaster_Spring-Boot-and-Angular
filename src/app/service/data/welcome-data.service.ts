import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'


export class HelloWorldBean{
  constructor(public message:string){}

}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http:HttpClient

  ) { }

  executeHelloWorldBeanService(){
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean')
    
  }

  executeHelloWorldBeanServicewithPathVariable(name:string){
    // let basicString = this.createBasicAuthenticationHttpHeader();

    // let headers = new HttpHeaders({
    //   Authorization: basicString
    // });


    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variables/${name}`
    //,{headers: headers}
    )
    
  }

  // createBasicAuthenticationHttpHeader(){
  //   let username = "Kaiyue Wu";
  //   let password = "123456";
  //   let basicAuthHeaderString = 'Basic ' + window.btoa(username +":" +  password);
  //   return basicAuthHeaderString
  // }


}
