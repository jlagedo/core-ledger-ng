
import { MatTableModule } from '@angular/material/table';
import { Component, inject } from '@angular/core';
import { CommonModule, AsyncPipe } from '@angular/common';
import { TodoApiService } from '../services/todo-api.service';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo',
  imports: [MatTableModule, AsyncPipe, CommonModule],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})
export class TodoComponent {
  private todoApiService = inject(TodoApiService)

  // The dollar sign ($) is a convention in Angular to indicate that a property is an Observable stream
  datasource$: Observable<Todo[]> = this.todoApiService.getTodos();
}
