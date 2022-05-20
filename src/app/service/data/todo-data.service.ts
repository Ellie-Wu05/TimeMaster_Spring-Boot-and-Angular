import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';
import { TODO_JPA_API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http:HttpClient

  ) { }

 retrieveAllTodos(username:any){
    return this.http.get<Todo[]>(`${TODO_JPA_API_URL}/users/${username}/todos`)
    
 }

 deleteTodo(username:any,id:number){
   return this.http.delete(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`)
 }

 retrieveTodo(username:any,id:number){
  return this.http.get<Todo>(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`)
}

  updateTodo(username:any,id:number,todo:any){
    return this.http.put
                    (`${TODO_JPA_API_URL}/users/${username}/todos/${id}`,
                    todo)
  }

  createTodo(username:any,todo:any){
    return this.http.post
                    (`${TODO_JPA_API_URL}/users/${username}/todos`,
                    todo)
  }
}
