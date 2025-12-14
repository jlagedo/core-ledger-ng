import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Todo, CreateTodo, UpdateTodo } from '../models/todo.model';

@Injectable({
    providedIn: 'root'
})
export class TodoApiService {
    private readonly http = inject(HttpClient);
    private readonly baseUrl = `${environment.apiUrl}/todos`;

    getTodos(): Observable<Todo[]> {
        return this.http.get<Todo[]>(this.baseUrl);
    }

    getTodoById(id: number): Observable<Todo> {
        return this.http.get<Todo>(`${this.baseUrl}/${id}`);
    }

    createTodo(todo: CreateTodo): Observable<Todo> {
        return this.http.post<Todo>(this.baseUrl, todo);
    }

    updateTodo(id: number, todo: UpdateTodo): Observable<void> {
        return this.http.put<void>(`${this.baseUrl}/${id}`, todo);
    }

    deleteTodo(id: number): Observable<void> {
        return this.http.delete<void>(`${this.baseUrl}/${id}`);
    }
}
