import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TopNav } from './top-nav/top-nav';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TopNav],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ng-test');

}
