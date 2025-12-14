import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';
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
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GlobalSearchComponent {
  placeholder = input<string>('Search...');
  search = output<string>();
}
