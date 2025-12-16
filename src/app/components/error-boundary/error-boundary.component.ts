import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-error-boundary',
    imports: [MatCardModule, MatButtonModule, MatIconModule],
    template: `
    @if (error) {
      <mat-card class="error-boundary-card">
        <mat-card-header>
          <mat-card-title>
            <mat-icon>error</mat-icon>
            Something went wrong
          </mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <p>{{ error }}</p>
          @if (showDetails && details) {
            <pre class="error-details">{{ details }}</pre>
          }
        </mat-card-content>
        <mat-card-actions>
          <button mat-button (click)="retry()">Try Again</button>
          @if (showDetails) {
            <button mat-button (click)="toggleDetails()">
              {{ showingDetails ? 'Hide' : 'Show' }} Details
            </button>
          }
        </mat-card-actions>
      </mat-card>
    } @else {
      <ng-content />
    }
  `,
    styles: [`
    .error-boundary-card {
      margin: 20px;
      background: var(--mat-sys-error-container);
      color: var(--mat-sys-on-error-container);
    }

    .error-boundary-card mat-icon {
      color: var(--mat-sys-error);
      margin-right: 8px;
      vertical-align: middle;
    }

    .error-details {
      background: rgba(0, 0, 0, 0.1);
      padding: 10px;
      border-radius: 4px;
      font-size: 12px;
      overflow-x: auto;
      margin-top: 10px;
    }

    mat-card-title {
      display: flex;
      align-items: center;
    }
  `]
})
export class ErrorBoundaryComponent {
    @Input() error: string | null = null;
    @Input() details: string | null = null;
    @Input() retry: () => void = () => { };
    @Input() showDetails: boolean = false;

    showingDetails = false;

    toggleDetails(): void {
        this.showingDetails = !this.showingDetails;
    }
}
