import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { Notification } from '../models/notification.model';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-notifications-menu',
  imports: [
    CommonModule,
    DatePipe,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  templateUrl: './notifications-menu-component.html',
  styleUrl: './notifications-menu-component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotificationsMenuComponent {
  notifications = input<Notification[]>([]);
  open = output<void>();
}
