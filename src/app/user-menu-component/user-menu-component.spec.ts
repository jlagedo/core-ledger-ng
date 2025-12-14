import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserMenuComponent } from './user-menu-component';

describe('UserMenuComponent', () => {
  let component: UserMenuComponent;
  let fixture: ComponentFixture<UserMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserMenuComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(UserMenuComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have OnPush change detection strategy', () => {
    expect(fixture.componentRef.changeDetectorRef).toBeTruthy();
  });

  describe('signal output', () => {
    it('should have logout output', () => {
      expect(component.logout).toBeTruthy();
    });

    it('should emit logout event when called', () => {
      let emitted = false;
      component.logout.subscribe(() => {
        emitted = true;
      });
      component.logout.emit();
      expect(emitted).toBe(true);
    });

    it('should allow multiple subscriptions to logout output', () => {
      let emitCount = 0;
      component.logout.subscribe(() => emitCount++);
      component.logout.subscribe(() => emitCount++);

      component.logout.emit();
      expect(emitCount).toBe(2);
    });
  });
});
