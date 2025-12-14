import { Component, inject } from '@angular/core';
import { CommonModule, AsyncPipe } from '@angular/common';
import { TodoApiService } from '../services/todo-api.service';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo.model';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, AsyncPipe],
    templateUrl: './home.html',
})
export class HomeComponent {
    private todoApiService = inject(TodoApiService);

    // The dollar sign ($) is a convention in Angular to indicate that a property is an Observable stream
    todoList$: Observable<Todo[]> = this.todoApiService.getTodos();
}
