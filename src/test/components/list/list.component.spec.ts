import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  ListComponent,
  InputData,
} from '../../../app/components/list/list.component';
import { DataService } from '../../../app/services/data/data.service';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let mockDataService: Partial<DataService>;

  beforeEach(() => {
    mockDataService = {
      toggleCommentSection: jest.fn(),
      setTopicData: jest.fn(),
    };

    TestBed.configureTestingModule({
      declarations: [ListComponent],
      providers: [{ provide: DataService, useValue: mockDataService }],
    });

    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
  });

  it('render list.component', () => {
    expect(component).toBeTruthy();
  });

  it('test toggelCommentSection', () => {
    const topicData: InputData = {
      by: 'John Doe',
      descendants: 5,
      id: 123,
      kids: [456, 789],
      score: 42,
      text: 'Sample text',
      time: 1628097722,
      title: 'Sample Title',
      type: 'story',
    };
    component.topicData = topicData;
    component.toggleCommentSection();
    expect(mockDataService.toggleCommentSection).toHaveBeenCalled();
    expect(mockDataService.setTopicData).toHaveBeenCalledWith(topicData);
  });
});
