import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  CardComponent,
  InputData,
} from '../../../app/components/card/card.component';
import { DataService } from '../../../app/services/data/data.service';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let mockDataService: Partial<DataService>;

  beforeEach(() => {
    mockDataService = {
      toggleCommentSection: jest.fn(),
      setTopicData: jest.fn(),
    };

    TestBed.configureTestingModule({
      declarations: [CardComponent],
      providers: [{ provide: DataService, useValue: mockDataService }],
    });

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
  });

  it('render card.component', () => {
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
