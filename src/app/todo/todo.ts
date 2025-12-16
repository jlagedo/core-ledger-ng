
import {
  MatTable,
  MatColumnDef,
  MatHeaderCellDef,
  MatHeaderCell,
  MatCellDef,
  MatCell,
  MatHeaderRowDef,
  MatHeaderRow,
  MatRowDef,
  MatRow
} from '@angular/material/table';
import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { TodoApiService } from '../services/todo-api.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { Todo } from '../models/todo.model';
import { MatIcon } from '@angular/material/icon';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { switchMap } from 'rxjs';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-todo',
  imports: [
    MatTable,
    MatColumnDef,
    MatHeaderCellDef,
    MatHeaderCell,
    MatCellDef,
    MatCell,
    MatHeaderRowDef,
    MatHeaderRow,
    MatRowDef,
    MatRow,
    MatIcon,
    MatCheckbox,
    RouterLink,
    MatButton
  ],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent {
  private todoApiService = inject(TodoApiService)
  private refresh$ = new Subject<void>();

  // Signal that refreshes when refresh$ emits
  datasource = toSignal(
    this.refresh$.pipe(
      switchMap(() => this.todoApiService.getTodos())
    ),
    { initialValue: [] as Todo[] }
  );

  constructor() {
    // Initial load
    this.refresh$.next();
  }

  deleteTodo(id: number): void {
    this.todoApiService.deleteTodo(id).subscribe(() => {
      // Trigger refresh by emitting to refresh$
      this.refresh$.next();
    });
  }

  toggleTodoCompletion(id: number, isCompleted: boolean): void {
    // Get the current todo to preserve its description
    const currentTodo = this.datasource().find(todo => todo.id === id);
    if (currentTodo) {
      this.todoApiService.updateTodo(id, {
        description: currentTodo.description,
        isCompleted
      }).subscribe(() => {
        this.refresh$.next();
      });
    }
  }
}
