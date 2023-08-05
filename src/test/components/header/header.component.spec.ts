import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HeaderComponent } from '../../../app/components/header/header.component';

describe('HeaderComponent', () => {
  let fixture: ComponentFixture<HeaderComponent>;
  let component: HeaderComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
  });

  it('app rendering', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct initial title', () => {
    expect(component.title).toBe('hacker news');
  });
});
