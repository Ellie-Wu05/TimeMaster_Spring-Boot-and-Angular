import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';
import { API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http:HttpClient

  ) { }

 retrieveAllTodos(username:any){
    return this.http.get<Todo[]>(`${API_URL}/users/${username}/todos`)
    
 }

 deleteTodo(username:any,id:number){
   return this.http.delete(`${API_URL}/users/${username}/todos/${id}`)
 }

 retrieveTodo(username:any,id:number){
  return this.http.get<Todo>(`${API_URL}/users/${username}/todos/${id}`)
}

  updateTodo(username:any,id:number,todo:any){
    return this.http.put
                    (`${API_URL}/users/${username}/todos/${id}`,
                    todo)
  }

  createTodo(username:any,todo:any){
    return this.http.post
                    (`${API_URL}/users/${username}/todos`,
                    todo)
  }
}
