import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoMenu } from './todo-menu';

describe('TodoMenu', () => {
  let component: TodoMenu;
  let fixture: ComponentFixture<TodoMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
