import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { AppShellComponent } from './app-shell-component/app-shell-component';

@Component({
  selector: 'app-root',
  imports: [AppShellComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  readonly title = signal('core-ledger-ng');

}
