import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo{
  constructor(
    public id:number,
    public description:string,
    public done:boolean,
    public targetDate: Date
  ){}
}


@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  message:string=''
  todos: Todo[]
  
  // [
  //   new Todo(1,'Cook Class',false,new Date()),
  //   new Todo(2,'Dance Class',false,new Date()),
  //   new Todo(3,'Swimming class',false,new Date())
  //   // {id:1,describption:'Cook Class'},
  //   // {id:2,describption:'Dance Class'},
  //   // {id:3,describption:'Swimming Class'}
  // ]
  // todo = {
  //   id:1,
  //   describption:'Cook class'
  // }
  | any
  // [
  //   new Todo(1,'Cook Class',false,new Date()),
  //   new Todo(2,'Dance Class',false,new Date()),
  //   new Todo(3,'Swimming class',false,new Date())
  //   // {id:1,describption:'Cook Class'},
  //   // {id:2,describption:'Dance Class'},
  //   // {id:3,describption:'Swimming Class'}
  // ]
  // todo = {
  //   id:1,
  //   describption:'Cook class'
  // }

  constructor(
    private todoservice:TodoDataService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.refreshTodos();
  }

  refreshTodos(){
    this.todoservice.retrieveAllTodos('Kaiyue Wu').subscribe(
      reponse => {
        console.log(reponse);
        this.todos = reponse;
      }
    );
  }

  deleteTodo(id:number){
    console.log(`delete ${id}`)
    this.todoservice.deleteTodo('Kaiyue Wu',id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete Todo ${id} successful!`
        this.refreshTodos();
      }
    )
  }

  updateTodo(id:number){
    console.log(`update todo ${id}`);
    this.router.navigate(['todos',id])

  }

  addTodo(){
    this.router.navigate(['todos',-1])
  }

  

}
