import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatChip } from '@angular/material/chips';

@Component({
  selector: 'app-top-bar',
  imports: [
    MatToolbar,
    MatChip
  ],
  templateUrl: './top-bar-component.html',
  styleUrl: './top-bar-component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopBarComponent {
  envLabel = input<string>('');
}

