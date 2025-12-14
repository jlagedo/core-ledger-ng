import { Component, output, ChangeDetectionStrategy } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-user-menu',
  imports: [
    MatIconButton,
    MatIcon,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger
  ],
  templateUrl: './user-menu-component.html',
  styleUrl: './user-menu-component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserMenuComponent {
  logout = output<void>();
}
