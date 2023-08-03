import {
  ComponentFixture,
  TestBed,
  tick,
  fakeAsync,
} from '@angular/core/testing';
import { TopicsComponent } from '../../app/topics/topics.component';
import { TopicsService } from '../../app/topics/topics.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('TopicsComponent', () => {
  let component: TopicsComponent;
  let fixture: ComponentFixture<TopicsComponent>;
  let topicsService: TopicsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopicsComponent],
      imports: [HttpClientTestingModule],
      providers: [TopicsService], // Provide the TopicsService
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicsComponent);
    component = fixture.componentInstance;
    topicsService = TestBed.inject(TopicsService); // Inject the TopicsService
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch topicsId from TopicsService and render topic items', fakeAsync(() => {
    const mockTopicsId = [1, 2, 3, 4];
    spyOn(topicsService, 'getTopics').and.returnValue(of(mockTopicsId));

    fixture.detectChanges(); // Trigger ngOnInit and initial rendering
    tick(); // Wait for async operation to complete

    const topicItems = fixture.nativeElement.querySelectorAll('app-topic-item');
    expect(topicItems.length).toBe(mockTopicsId.length);

    for (let i = 0; i < mockTopicsId.length; i++) {
      const topicItem = topicItems[i];
      expect(topicItem.getAttribute('topicId')).toBe(String(mockTopicsId[i]));
    }
  }));

  it('should set gridStyle to false for the first item', () => {
    component.isFourthItem(0);
    expect(component.gridStyle).toBe(false);
  });

  it('should toggle gridStyle on every fourth item', () => {
    component.isFourthItem(1); // First toggle (index 1 is the fourth item)
    expect(component.gridStyle).toBe(false);

    component.isFourthItem(3); // Second toggle (index 3 is the fourth item)
    expect(component.gridStyle).toBe(true);
  });
});
