import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';
import { MatFormField, MatPrefix, MatSuffix } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';

@Component({
  selector: 'app-global-search',
  imports: [
    MatFormField,
    MatPrefix,
    MatSuffix,
    MatInput,
    MatIcon,
    MatIconButton
  ],
  templateUrl: './global-search-component.html',
  styleUrl: './global-search-component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GlobalSearchComponent {
  placeholder = input<string>('Search...');
  search = output<string>();
}
