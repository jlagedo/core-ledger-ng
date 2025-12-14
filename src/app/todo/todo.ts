
import { MatTableModule } from '@angular/material/table';
import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TodoApiService } from '../services/todo-api.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo',
  imports: [MatTableModule, DatePipe],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent {
  private todoApiService = inject(TodoApiService)

  // Converted from Observable to signal for better reactivity
  datasource = toSignal(this.todoApiService.getTodos(), { initialValue: [] as Todo[] });
}
