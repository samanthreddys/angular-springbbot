import { Component, OnInit } from '@angular/core';
import { TodoDataService } from './../service/data/todo-data.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number;
  todo: Todo;

  constructor(
    private todoservice: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.todo = new Todo(this.id, '', false, new Date());
    if (this.id !== -1){
    this.todoservice.retrieveTodoById('admin', this.id)
    .subscribe(
      data => this.todo = data
    );
    }
  }

  saveTodoById(){

    if (this.id === -1  ){
      this.todoservice.addTodoById('admin', this.todo).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['todos']);
        }
      );

    }else{
     this.todoservice.saveTodoById('admin', this.id, this.todo).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['todos']);
      },
      error => error.error.message
    );
    }
  }

}
