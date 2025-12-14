import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoComponent } from './todo';
import { TodoApiService } from '../services/todo-api.service';
import { of } from 'rxjs';
import { Todo } from '../models/todo.model';
import { provideHttpClient } from '@angular/common/http';
import { vi } from 'vitest';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;
  let mockTodoService: { getTodos: ReturnType<typeof vi.fn> };

  const mockTodos: Todo[] = [
    {
      id: 1,
      description: 'Test Todo 1',
      isCompleted: false,
      createdAt: new Date('2024-01-01'),
      completedAt: null
    },
    {
      id: 2,
      description: 'Test Todo 2',
      isCompleted: true,
      createdAt: new Date('2024-01-02'),
      completedAt: new Date('2024-01-03')
    }
  ];

  beforeEach(async () => {
    mockTodoService = {
      getTodos: vi.fn().mockReturnValue(of(mockTodos))
    };

    await TestBed.configureTestingModule({
      imports: [TodoComponent],
      providers: [
        provideHttpClient(),
        { provide: TodoApiService, useValue: mockTodoService }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have OnPush change detection strategy', () => {
    expect(fixture.componentRef.changeDetectorRef).toBeTruthy();
  });

  describe('datasource signal', () => {
    it('should populate datasource signal from service', () => {
      expect(component.datasource()).toEqual(mockTodos);
      expect(mockTodoService.getTodos).toHaveBeenCalled();
    });

    it('should be reactive - signal can be read multiple times', () => {
      const firstRead = component.datasource();
      const secondRead = component.datasource();
      expect(firstRead).toEqual(secondRead);
      expect(firstRead).toEqual(mockTodos);
    });
  });

  describe('template integration', () => {
    it('should render todos in mat-table', () => {
      fixture.detectChanges();
      const compiled = fixture.nativeElement as HTMLElement;
      const table = compiled.querySelector('mat-table');
      expect(table).toBeTruthy();
    });
  });
});
