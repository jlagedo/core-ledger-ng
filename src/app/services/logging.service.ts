import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

export interface ErrorLog {
    message: string;
    stack?: string;
    url: string;
    timestamp: string;
    userId?: string;
    additionalInfo?: any;
}

@Injectable({
    providedIn: 'root'
})
export class LoggingService {
    private http = inject(HttpClient);
    private readonly isProduction = environment.production;

    logError(error: ErrorLog): void {
        // In production, send to external logging service
        if (this.isProduction) {
            // Example: Send to your logging endpoint
            this.http.post('/api/logs/error', error).subscribe({
                error: (err) => console.error('Failed to log error:', err)
            });
        }

        // Always log to console in development
        console.group('🚨 Application Error');
        console.error('Message:', error.message);
        console.error('URL:', error.url);
        console.error('Timestamp:', error.timestamp);
        if (error.stack) {
            console.error('Stack Trace:', error.stack);
        }
        if (error.additionalInfo) {
            console.error('Additional Info:', error.additionalInfo);
        }
        console.groupEnd();
    }

    logWarning(message: string, context?: any): void {
        console.group('⚠️ Warning');
        console.warn(message);
        if (context) {
            console.warn('Context:', context);
        }
        console.groupEnd();
    }

    logInfo(message: string, context?: any): void {
        if (!this.isProduction) {
            console.group('ℹ️ Info');
            console.log(message);
            if (context) {
                console.log('Context:', context);
            }
            console.groupEnd();
        }
    }
}
