import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-global-search',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './global-search-component.html',
  styleUrl: './global-search-component.css',
})
export class GlobalSearchComponent {
  @Input() placeholder: string = 'Search...';
  @Output() search = new EventEmitter<string>();
}
