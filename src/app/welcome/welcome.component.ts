import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { AppComponent } from '../app.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  
  message = 'Welcome'
  name = ''

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
   // compliance error this.message = 5
    console.log(this.message)
    this.name = this.route.snapshot.params['name']
  }


}
