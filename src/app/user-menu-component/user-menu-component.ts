import { Component, Output, EventEmitter } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-user-menu',
  imports: [
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  templateUrl: './user-menu-component.html',
  styleUrl: './user-menu-component.css',
})
export class UserMenuComponent {
  @Output() logout = new EventEmitter<void>();
}
