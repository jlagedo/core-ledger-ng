import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';
import { Entity } from '../models/entity.model';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatChip } from '@angular/material/chips';

@Component({
  selector: 'app-top-bar',
  imports: [
    MatToolbar,
    MatIconButton,
    MatIcon,
    MatChip
  ],
  templateUrl: './top-bar-component.html',
  styleUrl: './top-bar-component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopBarComponent {
  envLabel = input<string>('');
  entities = input<Entity[]>([]);
  toggleSidenav = output<void>();
}
