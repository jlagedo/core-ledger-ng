import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TodoApiService } from '../services/todo-api.service';
import { CreateTodo } from '../models/todo.model';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-todo-form-component',
  imports: [MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule],
  templateUrl: './todo-form-component.html',
  styleUrl: './todo-form-component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoFormComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private todoService = inject(TodoApiService);
  private snackBar = inject(MatSnackBar);

  todoForm = this.fb.group({
    description: ['', Validators.required],
  });

  isLoading = false;

  onSubmit() {
    if (this.todoForm.valid) {
      this.isLoading = true;

      const createTodo: CreateTodo = {
        description: this.todoForm.value.description ?? null,
        isCompleted: false
      };

      this.todoService.createTodo(createTodo).pipe(
        finalize(() => {
          this.isLoading = false;
        })
      ).subscribe({
        next: () => {
          this.snackBar.open('Todo created successfully!', 'Close', {
            duration: 3000,
            panelClass: ['success-snackbar']
          });
          this.router.navigate(['/todos']);
        },
        error: (error) => {
          // Handle specific error cases
          let errorMessage = 'Failed to create todo. Please try again.';

          if (error?.status === 400) {
            errorMessage = error.error?.message || 'Invalid todo data. Please check your input.';
          } else if (error?.status === 409) {
            errorMessage = 'This todo already exists.';
          } else if (error?.status === 422) {
            errorMessage = 'Validation error: ' + (error.error?.message || 'Invalid data');
          }

          this.snackBar.open(errorMessage, 'Close', {
            duration: 5000,
            panelClass: ['error-snackbar']
          });

          // Error is already logged by the global error handler via the interceptor
        }
      });
    } else {
      // Form is invalid, show validation message
      this.snackBar.open('Please fill in all required fields correctly.', 'Close', {
        duration: 3000,
        panelClass: ['warning-snackbar']
      });

      // Mark all fields as touched to show validation errors
      this.todoForm.markAllAsTouched();
    }
  }
}
