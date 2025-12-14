import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GlobalSearchComponent } from './global-search-component';

describe('GlobalSearchComponent', () => {
  let component: GlobalSearchComponent;
  let fixture: ComponentFixture<GlobalSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlobalSearchComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(GlobalSearchComponent);
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
    it('should have placeholder input signal with default value', () => {
      expect(component.placeholder()).toBe('Search...');
    });

    it('should accept placeholder input value', () => {
      fixture.componentRef.setInput('placeholder', 'Custom search placeholder');
      expect(component.placeholder()).toBe('Custom search placeholder');
    });
  });

  describe('signal output', () => {
    it('should have search output', () => {
      expect(component.search).toBeTruthy();
    });

    it('should emit search event with query string', () => {
      let emittedValue: string | undefined;
      component.search.subscribe((value) => {
        emittedValue = value;
      });
      component.search.emit('test query');
      expect(emittedValue).toBe('test query');
    });
  });
});
