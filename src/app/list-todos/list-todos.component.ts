import { Component, OnInit } from '@angular/core';
import { TodoDataService } from './../service/data/todo-data.service';

export class Todo{
  constructor(
    public id: number,
    public description: string,
    public isCompleted: boolean,
    public targetDate: Date
  ){

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[];
  message: string;


  constructor(private todoservice: TodoDataService) { }

  ngOnInit(): void {
this.refreshTodos();

  }

  refreshTodos(){
        this.todoservice.retrieveAllTodos('admin').subscribe(
      response => {
        this.todos = response;
      },
      error => error.error.message
    );
  }
  deleteTodo(id){
    this.todoservice.deleteTodo('admin', id).subscribe(
      response => {
        console.log(`Todo ${id} deleted successfully`);
        this.message = `Todo ${id} deleted successfully`;
        this.refreshTodos();
      }
    );
  }
}
