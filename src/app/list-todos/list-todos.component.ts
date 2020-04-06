import { Component, OnInit } from '@angular/core';
import { TodoDataService } from './../service/data/todo-data.service';
import { Router } from '@angular/router';
import { RouterModule, Routes} from '@angular/router';

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


  constructor(
    private todoservice: TodoDataService,
    private router: Router
    ) { }

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

  updateTodo(id){
    console.log(`updated ${id}`);
    this.router.navigate(['todos', id]);

  }

  addTodo(){
    this.router.navigate(['todos', -1]);
  }

}
