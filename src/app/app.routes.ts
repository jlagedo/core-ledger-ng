import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', loadComponent: () => import('./dashboard/dashboard.component').then(c => c.DashboardComponent) },
    { path: 'todo', loadComponent: () => import('./todo/todo').then(c => c.TodoComponent) },
    { path: 'todo/form', loadComponent: () => import('./todo-form-component/todo-form-component').then(c => c.TodoFormComponent) },
];
