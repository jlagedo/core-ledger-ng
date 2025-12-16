import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
    const snackBar = inject(MatSnackBar);
    const router = inject(Router);

    return next(req).pipe(
        catchError((error) => {
            // Don't show error messages for requests that expect errors
            if (req.headers.get('X-Skip-Error-Handling')) {
                return throwError(() => error);
            }

            // Handle specific HTTP status codes
            let errorMessage = 'An error occurred';
            let duration = 3000;

            switch (error.status) {
                case 0:
                    errorMessage = 'Network error. Please check your connection.';
                    duration = 5000;
                    break;
                case 400:
                    errorMessage = error.error?.message || 'Invalid request. Please check your input.';
                    duration = 4000;
                    break;
                case 401:
                    errorMessage = 'Session expired. Please log in again.';
                    duration = 5000;
                    // Navigate to login after a short delay
                    setTimeout(() => {
                        router.navigate(['/login']);
                    }, 1000);
                    break;
                case 403:
                    errorMessage = 'Access denied. You don\'t have permission to perform this action.';
                    break;
                case 404:
                    errorMessage = 'Resource not found.';
                    break;
                case 409:
                    errorMessage = error.error?.message || 'Conflict: The resource has been modified by another user.';
                    duration = 4000;
                    break;
                case 422:
                    errorMessage = error.error?.message || 'Validation error. Please check your input.';
                    duration = 4000;
                    break;
                case 429:
                    errorMessage = 'Too many requests. Please wait and try again.';
                    duration = 5000;
                    break;
                case 500:
                    errorMessage = 'Server error. Please try again later.';
                    duration = 5000;
                    break;
                case 502:
                case 503:
                case 504:
                    errorMessage = 'Service unavailable. Please try again later.';
                    duration = 5000;
                    break;
                default:
                    if (error.status >= 400 && error.status < 500) {
                        errorMessage = 'Client error. Please check your request and try again.';
                    } else if (error.status >= 500) {
                        errorMessage = 'Server error. Our team has been notified.';
                    }
            }

            // Show user-friendly message
            snackBar.open(errorMessage, 'Close', {
                duration,
                panelClass: ['error-snackbar'],
                horizontalPosition: 'end',
                verticalPosition: 'top'
            });

            // Re-throw for global handler to log
            return throwError(() => error);
        })
    );
};
