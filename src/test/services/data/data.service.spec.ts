import { TestBed } from '@angular/core/testing';
import { DataService, InputData } from '../../../app/services/data/data.service';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataService],
    });
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set topicData using setTopicData method', () => {
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

    service.setTopicData(topicData);

    expect(service.topicData).toEqual(topicData);
  });

  it('should get topicData using getTopicData method', () => {
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

    service.topicData = topicData;
    const result = service.getTopicData();

    expect(result).toEqual(topicData);
  });

  it('should toggle isHidden using toggleCommentSection method', () => {
    service.isHidden = true;
    service.toggleCommentSection();
    expect(service.isHidden).toBe(false);

    service.isHidden = false;
    service.toggleCommentSection();
    expect(service.isHidden).toBe(true);
  });

  it('should return isHidden value using getIsHidden method', () => {
    service.isHidden = true;
    expect(service.getIsHidden()).toBe(true);

    service.isHidden = false;
    expect(service.getIsHidden()).toBe(false);
  });
});
