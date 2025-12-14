import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Notification } from '../models/notification.model';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-notifications-menu',
  imports: [
    DatePipe,
    MatIconButton,
    MatIcon,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger
  ],
  templateUrl: './notifications-menu-component.html',
  styleUrl: './notifications-menu-component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotificationsMenuComponent {
  notifications = input<Notification[]>([]);
  open = output<void>();
}
