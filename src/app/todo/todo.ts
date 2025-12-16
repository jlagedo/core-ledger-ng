
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
import { MatSnackBar } from '@angular/material/snack-bar';

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
  private snackBar = inject(MatSnackBar);

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
    this.todoApiService.deleteTodo(id).subscribe({
      next: () => {
        // Trigger refresh by emitting to refresh$
        this.refresh$.next();
        this.snackBar.open('Todo deleted successfully', 'Close', {
          duration: 3000,
          panelClass: ['success-snackbar']
        });
      },
      error: (error) => {
        this.snackBar.open('Failed to delete todo. Please try again.', 'Close', {
          duration: 5000,
          panelClass: ['error-snackbar']
        });
        // Error is already logged by the global error handler
      }
    });
  }

  toggleTodoCompletion(id: number, isCompleted: boolean): void {
    // Get the current todo to preserve its description
    const currentTodo = this.datasource().find(todo => todo.id === id);
    if (currentTodo) {
      this.todoApiService.updateTodo(id, {
        description: currentTodo.description,
        isCompleted
      }).subscribe({
        next: () => {
          this.refresh$.next();
          const status = isCompleted ? 'completed' : 'marked as incomplete';
          this.snackBar.open(`Todo ${status} successfully`, 'Close', {
            duration: 3000,
            panelClass: ['success-snackbar']
          });
        },
        error: (error) => {
          this.snackBar.open('Failed to update todo. Please try again.', 'Close', {
            duration: 5000,
            panelClass: ['error-snackbar']
          });
          // Error is already logged by the global error handler
        }
      });
    }
  }
}
