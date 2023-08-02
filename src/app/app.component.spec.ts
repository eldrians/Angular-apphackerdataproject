import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should display app-header', () => {
    const headerElement = fixture.nativeElement.querySelector('app-header');
    expect(headerElement).toBeTruthy();
  });

  it('should display app-topics inside main', () => {
    const mainElement = fixture.nativeElement.querySelector('main');
    const appTopicsElement = mainElement.querySelector('app-topics');
    expect(mainElement).toBeTruthy();
    expect(appTopicsElement).toBeTruthy();
  });

  it('should display router-outlet', () => {
    const routerOutletElement =
      fixture.nativeElement.querySelector('router-outlet');
    expect(routerOutletElement).toBeTruthy();
  });
});
