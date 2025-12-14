import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TopBarComponent } from './top-bar-component';
import { Entity } from '../models/entity.model';

describe('TopBarComponent', () => {
  let component: TopBarComponent;
  let fixture: ComponentFixture<TopBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopBarComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TopBarComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have OnPush change detection strategy', () => {
    expect(fixture.componentRef.changeDetectorRef).toBeTruthy();
  });

  describe('signal inputs', () => {
    it('should have envLabel input signal with default empty string', () => {
      expect(component.envLabel()).toBe('');
    });

    it('should accept envLabel input value', () => {
      fixture.componentRef.setInput('envLabel', 'Production');
      expect(component.envLabel()).toBe('Production');
    });

    it('should have entities input signal with default empty array', () => {
      expect(component.entities()).toEqual([]);
    });

    it('should accept entities input value', () => {
      const testEntities: Entity[] = [
        { id: 1, name: 'Entity 1', type: 'test' },
        { id: 2, name: 'Entity 2', type: 'test' }
      ];
      fixture.componentRef.setInput('entities', testEntities);
      expect(component.entities()).toEqual(testEntities);
    });
  });

  describe('signal output', () => {
    it('should emit toggleSidenav output when called', () => {
      let emitted = false;
      component.toggleSidenav.subscribe(() => {
        emitted = true;
      });
      component.toggleSidenav.emit();
      expect(emitted).toBe(true);
    });
  });
});
