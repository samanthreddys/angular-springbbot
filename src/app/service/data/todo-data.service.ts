import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../../list-todos/list-todos.component';
import { API_URL } from './../../app.constants';


@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

    constructor(
    private http: HttpClient
  ) { }

    retrieveAllTodos(username){
    return this.http.get<Todo[]>(`${API_URL}/users/${username}/todos`);
  }

  deleteTodo(username, id){
    return this.http.delete(`${API_URL}/users/${username}/todos/${id}`);
  }

    retrieveTodoById(username, id){
    return this.http.get<Todo>(`${API_URL}/users/${username}/todos/${id}`);
  }
  saveTodoById(username, id, todo){
    return this.http.put(`${API_URL}/users/${username}/todos/${id}`, todo);
  }

    addTodoById(username, todo){
    return this.http.post(`${API_URL}/users/${username}/todos`, todo);
  }

}

