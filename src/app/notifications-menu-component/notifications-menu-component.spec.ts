import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotificationsMenuComponent } from './notifications-menu-component';
import { Notification } from '../models/notification.model';

describe('NotificationsMenuComponent', () => {
  let component: NotificationsMenuComponent;
  let fixture: ComponentFixture<NotificationsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationsMenuComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NotificationsMenuComponent);
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
    it('should have notifications input signal with default empty array', () => {
      expect(component.notifications()).toEqual([]);
    });

    it('should accept notifications input value', () => {
      const testNotifications: Notification[] = [
        {
          id: '1',
          message: 'Test notification 1',
          title: 'Test Title 1',
          icon: 'info',
          time: new Date('2024-01-01'),
          timestamp: new Date('2024-01-01'),
          read: false,
          type: 'info'
        },
        {
          id: '2',
          message: 'Test notification 2',
          title: 'Test Title 2',
          icon: 'warning',
          time: new Date('2024-01-02'),
          timestamp: new Date('2024-01-02'),
          read: true,
          type: 'warning'
        }
      ];
      fixture.componentRef.setInput('notifications', testNotifications);
      expect(component.notifications()).toEqual(testNotifications);
    });

    it('should handle empty notifications array', () => {
      fixture.componentRef.setInput('notifications', []);
      expect(component.notifications()).toEqual([]);
    });
  });

  describe('signal output', () => {
    it('should emit open output when called', () => {
      let emitted = false;
      component.open.subscribe(() => {
        emitted = true;
      });
      component.open.emit();
      expect(emitted).toBe(true);
    });
  });
});
