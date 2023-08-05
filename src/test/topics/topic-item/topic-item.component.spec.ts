import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TopicItemComponent } from '../../../app/topics/topic-item/topic-item.component';
import { DataService } from '../../../app/services/data/data.service';

describe('TopicItemComponent', () => {
  let component: TopicItemComponent;
  let fixture: ComponentFixture<TopicItemComponent>;
  let mockDataService: Partial<DataService>;

  beforeEach(() => {
    mockDataService = {
      getIsHidden: jest.fn(() => true),
    };

    TestBed.configureTestingModule({
      declarations: [TopicItemComponent],
      providers: [{ provide: DataService, useValue: mockDataService }],
    });

    fixture = TestBed.createComponent(TopicItemComponent);
    component = fixture.componentInstance;
  });

  it('render topic-data.component', () => {
    expect(component).toBeTruthy();
  });

  it('should call DataService.getIsHidden in isHidden method', () => {
    expect(component.isHidden()).toBe(true);
  });
});
