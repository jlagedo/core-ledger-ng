import { Component, viewChild, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { SideNavComponent } from '../side-nav-component/side-nav-component';
import { TopBarComponent } from '../top-bar-component/top-bar-component';
import { NotificationsMenuComponent } from '../notifications-menu-component/notifications-menu-component';
import { UserMenuComponent } from '../user-menu-component/user-menu-component';
import { TodoMenu } from '../todo-menu/todo-menu';

@Component({
  selector: 'app-app-shell-component',
  imports: [
    RouterOutlet,
    MatSidenav,
    MatSidenavContainer,
    MatSidenavContent,
    SideNavComponent,
    TopBarComponent,
    NotificationsMenuComponent,
    UserMenuComponent,
    TodoMenu
  ],
  templateUrl: './app-shell-component.html',
  styleUrl: './app-shell-component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppShellComponent {
  sidenav = viewChild(MatSidenav);
}
