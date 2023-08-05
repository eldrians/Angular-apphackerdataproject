import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  ModalComponent,
  InputData,
} from '../../../app/components/modal/modal.component';
import { DataService } from '../../../app/services/data/data.service';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;
  let mockDataService: Partial<DataService>;

  beforeEach(() => {
    mockDataService = {
      toggleCommentSection: jest.fn(),
      getIsHidden: jest.fn(() => true),
      getTopicData: jest.fn(),
    };

    TestBed.configureTestingModule({
      declarations: [ModalComponent],
      providers: [{ provide: DataService, useValue: mockDataService }],
    });

    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
  });

  it('render modal.component', () => {
    expect(component).toBeTruthy();
  });

  it('should call DataService.getTopicData in ngOnInit', () => {
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
    (mockDataService.getTopicData as jest.Mock).mockReturnValueOnce(topicData);
    component.ngOnInit();
    expect(mockDataService.getTopicData).toHaveBeenCalled();
    expect(component.topicData).toBe(topicData);
  });

  it('should call DataService.toggleCommentSection in toggleCommentSection method', () => {
    component.toggleCommentSection();
    expect(mockDataService.toggleCommentSection).toHaveBeenCalled();
  });

  it('should call DataService.getIsHidden in isHidden method', () => {
    expect(component.isHidden()).toBe(true);
  });
});
