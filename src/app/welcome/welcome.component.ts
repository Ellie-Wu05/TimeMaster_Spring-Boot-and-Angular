import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';
// import { AppComponent } from '../app.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  
  message = 'Welcome'
  welcomeMessage:string = ''
  errorMessage:string =''
  name = ''

  constructor(
    private route:ActivatedRoute,
    private service:WelcomeDataService) { }

  ngOnInit(): void {
   // compliance error this.message = 5
    // console.log(this.message)
    this.name = this.route.snapshot.params['name']
  }

  getWelcomeMessage(){
    console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(
        response => this.handleSuccessfulResponse(response),
        error => this.handleErrorResponse(error)
    );
  }
  getWelcomeMessagewithParameter(){
    console.log(this.service.executeHelloWorldBeanServicewithPathVariable(this.name));
    this.service.executeHelloWorldBeanServicewithPathVariable(this.name).subscribe(
        response => this.handleSuccessfulResponse(response),
        error => this.handleErrorResponse(error)
    );
  }

  handleSuccessfulResponse(response:any){
    this.welcomeMessage = response.message;
  }

  handleErrorResponse(err:any){
    this.errorMessage= err.error.message;
  }

}
