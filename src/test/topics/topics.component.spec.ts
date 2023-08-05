import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TopicsComponent } from '../../app/topics/topics.component';
import { of, throwError } from 'rxjs';
import { ApiService } from '../../app/services/api/api.service';

describe('TopicsComponent', () => {
  let fixture: ComponentFixture<TopicsComponent>;
  let component: TopicsComponent;
  let mockApiService: Partial<ApiService>;

  beforeEach(() => {
    mockApiService = {
      getTopics: jest.fn(() => of([1, 2, 3])),
      getTopicsData: jest.fn(() => of([{ id: 1, title: 'Topic 1' }])),
    };

    TestBed.configureTestingModule({
      declarations: [TopicsComponent],
      providers: [{ provide: ApiService, useValue: mockApiService }],
    });

    fixture = TestBed.createComponent(TopicsComponent);
    component = fixture.componentInstance;
  });

  it('should create the TopicsComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should call getTopicsId and getTopicsData during ngOnInit', () => {
    const getTopicsIdSpy = jest.spyOn(component, 'getTopicsId');
    const getTopicsDataSpy = jest.spyOn(component, 'getTopicsData');
    fixture.detectChanges(); // Trigger ngOnInit
    expect(getTopicsIdSpy).toHaveBeenCalled();
    expect(getTopicsDataSpy).toHaveBeenCalled();
  });

  it('should set topicsId with data from the ApiService', () => {
    component.getTopicsId();
    expect(mockApiService.getTopics).toHaveBeenCalled();
    expect(component.topicsId).toEqual([1, 2, 3]);
  });

  it('should handle error when fetching topics', () => {
    console.error = jest.fn();

    mockApiService.getTopics = jest.fn(() =>
      throwError('Failed to fetch topics')
    );
    component.getTopicsId();
    expect(mockApiService.getTopics).toHaveBeenCalled();
    expect(component.topicsId).toEqual([]);
    expect(console.error).toHaveBeenCalledWith(
      'Error fetching data:',
      'Failed to fetch topics'
    );
  });

  it('should set topicsData with data from the ApiService', () => {
    component.getTopicsData();
    expect(mockApiService.getTopicsData).toHaveBeenCalled();
    expect(component.topicsData).toEqual([{ id: 1, title: 'Topic 1' }]);
  });

  it('should handle error when fetching topicsData', () => {
    console.error = jest.fn();

    mockApiService.getTopicsData = jest.fn(() =>
      throwError('Failed to fetch topics')
    );
    component.getTopicsData();
    expect(mockApiService.getTopicsData).toHaveBeenCalled();
    expect(component.topicsData).toEqual([]);
    expect(console.error).toHaveBeenCalledWith(
      'Error fetching data:',
      'Failed to fetch topics'
    );
  });

  it('should return true for index not divisible by 4', () => {
    expect(component.checkCard(0)).toBe(false);
    expect(component.checkCard(1)).toBe(false);
    expect(component.checkCard(4)).toBe(true);
    expect(component.checkCard(5)).toBe(true);
  });

  it('should return true for index not divisible by 4', () => {
    expect(component.checkGrid(0)).toBe(false);
    expect(component.checkGrid(1)).toBe(false);
    expect(component.checkGrid(4)).toBe(true);
    expect(component.checkGrid(5)).toBe(true);
  });
});

// describe('getTopicsId', () => {
//   it('should set topicsId with data from the ApiService', () => {
//     component.getTopicsId();
//     expect(mockApiService.getTopics).toHaveBeenCalled();
//     expect(component.topicsId).toEqual([1, 2, 3]);
//   });
// });

// describe('checkGrid', () => {
//   it('should return true for index not divisible by 4', () => {
//     expect(component.checkGrid(2)).toBe(true);
//     expect(component.checkGrid(3)).toBe(true);
//     expect(component.checkGrid(5)).toBe(true);
//   });

// });
