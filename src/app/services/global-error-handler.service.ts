import { ErrorHandler, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { LoggingService, ErrorLog } from './logging.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
    private readonly router = inject(Router);
    private readonly loggingService = inject(LoggingService);

    handleError(error: any): void {
        // Create error log entry
        const errorLog: ErrorLog = {
            message: error?.message || error?.toString() || 'Unknown error',
            stack: error?.stack,
            url: this.router.url,
            timestamp: new Date().toISOString(),
            additionalInfo: {
                status: error?.status,
                statusText: error?.statusText,
                name: error?.name,
                errorType: this.getErrorType(error)
            }
        };

        // Log the error
        this.loggingService.logError(errorLog);

        // Handle critical errors that might require navigation
        if (this.isCriticalError(error)) {
            this.handleCriticalError(error);
        }

        // Don't re-throw in production to prevent app crashes
        // In development, let it show in console for debugging
        if (!this.isProduction()) {
            console.error('Global Error Handler caught:', error);
        }
    }

    private getErrorType(error: any): string {
        if (error?.status) {
            return 'HTTP_ERROR';
        }
        if (error?.name === 'ChunkLoadError') {
            return 'CHUNK_LOAD_ERROR';
        }
        if (error instanceof TypeError) {
            return 'TYPE_ERROR';
        }
        if (error instanceof ReferenceError) {
            return 'REFERENCE_ERROR';
        }
        return 'UNKNOWN_ERROR';
    }

    private isCriticalError(error: any): boolean {
        // Define what constitutes a critical error
        return (
            error?.status >= 500 ||
            error?.name === 'ChunkLoadError' ||
            error?.message?.includes('Uncaught') ||
            this.isNetworkError(error)
        );
    }

    private isNetworkError(error: any): boolean {
        return (
            error?.message?.includes('NetworkError') ||
            error?.message?.includes('Failed to fetch') ||
            error?.status === 0
        );
    }

    private handleCriticalError(error: any): void {
        // Navigate to error page for critical errors
        // Don't navigate for chunk load errors as they need a page reload
        if (error?.name !== 'ChunkLoadError') {
            this.router.navigate(['/error'], {
                state: {
                    error: error?.message || 'An unexpected error occurred',
                    errorCode: error?.status
                }
            }).catch(navigationError => {
                console.error('Failed to navigate to error page:', navigationError);
            });
        }
    }

    private isProduction(): boolean {
        // Check if we're in production mode
        return false; // This should match your environment configuration
    }
}
