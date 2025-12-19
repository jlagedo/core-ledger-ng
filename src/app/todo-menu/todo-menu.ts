import { Component } from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';
import {MatMenuPanel, MatMenuTrigger, MatMenu, MatMenuItem} from '@angular/material/menu';

@Component({
  selector: 'app-todo-menu',
  imports: [
    MatIcon,
    MatIconButton,
    MatMenuTrigger,
    MatMenu,
    MatMenuItem
  ],
  templateUrl: './todo-menu.html',
  styleUrl: './todo-menu.css',
})
export class TodoMenu {


}
