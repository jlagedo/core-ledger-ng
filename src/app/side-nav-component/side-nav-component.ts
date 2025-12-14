import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatNavList, MatListItem, MatListItemIcon, MatListItemTitle } from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-side-nav',
  imports: [
    RouterLink,
    RouterLinkActive,
    MatNavList,
    MatListItem,
    MatListItemIcon,
    MatListItemTitle,
    MatIcon
  ],
  templateUrl: './side-nav-component.html',
  styleUrl: './side-nav-component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideNavComponent {

}
