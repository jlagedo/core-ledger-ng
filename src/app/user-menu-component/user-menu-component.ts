import {ChangeDetectionStrategy, Component, inject, output} from '@angular/core';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {MatMenu, MatMenuItem, MatMenuTrigger} from '@angular/material/menu';
import {AuthService} from '../services/auth-service';

@Component({
  selector: 'app-user-menu',
  imports: [
    MatIconButton,
    MatIcon,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
    MatButton
  ],
  templateUrl: './user-menu-component.html',
  styleUrl: './user-menu-component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserMenuComponent {

  logout = output<void>();

  user = inject(AuthService).currentUser;

}
