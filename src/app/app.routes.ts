import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', loadComponent: () => import('./dashboard-component/dashboard-component').then(c => c.DashboardComponent) },
    { path: 'home', loadComponent: () => import('./home/home.component').then(c => c.HomeComponent) },
    { path: 'todo', loadComponent: () => import('./todo/todo').then(c => c.TodoComponent) },
];
