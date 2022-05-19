import { Component, OnInit } from '@angular/core';

export class Todo{
  constructor(
    public id:number,
    public describption:string,
    public done:boolean,
    public targerDate:Date
  ){}
}


@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    new Todo(1,'Cook Class',false,new Date()),
    new Todo(2,'Dance Class',false,new Date()),
    new Todo(3,'Swimming class',false,new Date())
    // {id:1,describption:'Cook Class'},
    // {id:2,describption:'Dance Class'},
    // {id:3,describption:'Swimming Class'}
  ]
  // todo = {
  //   id:1,
  //   describption:'Cook class'
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
