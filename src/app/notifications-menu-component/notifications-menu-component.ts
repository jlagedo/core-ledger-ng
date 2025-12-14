import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-notifications-menu',
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  templateUrl: './notifications-menu-component.html',
  styleUrl: './notifications-menu-component.css',
})
export class NotificationsMenuComponent {
  @Input() notifications: any[] = [];
  @Output() open = new EventEmitter<void>();
}
