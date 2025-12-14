import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { SideNavComponent } from '../side-nav-component/side-nav-component';
import { TopBarComponent } from '../top-bar-component/top-bar-component';
import { GlobalSearchComponent } from '../global-search-component/global-search-component';
import { NotificationsMenuComponent } from '../notifications-menu-component/notifications-menu-component';
import { UserMenuComponent } from '../user-menu-component/user-menu-component';

@Component({
  selector: 'app-app-shell-component',
  imports: [
    RouterOutlet,
    MatSidenavModule,
    SideNavComponent,
    TopBarComponent,
    GlobalSearchComponent,
    NotificationsMenuComponent,
    UserMenuComponent
  ],
  templateUrl: './app-shell-component.html',
  styleUrl: './app-shell-component.css',
})
export class AppShellComponent {
  @ViewChild(MatSidenav) sidenav?: MatSidenav;
}
