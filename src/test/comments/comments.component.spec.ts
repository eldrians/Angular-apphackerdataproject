import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommentsComponent } from '../../app/comments/comments.component';
import { of, throwError } from 'rxjs';
import { ApiService } from '../../app/services/api/api.service';

describe('CommentsComponent', () => {
  let fixture: ComponentFixture<CommentsComponent>;
  let component: CommentsComponent;
  let mockApiService: Partial<ApiService>;

  beforeEach(() => {
    mockApiService = {
      getCommentsData: jest.fn(() => of([{ id: 1, test: 'comments' }])),
    };

    TestBed.configureTestingModule({
      declarations: [CommentsComponent],
      providers: [{ provide: ApiService, useValue: mockApiService }],
    });

    fixture = TestBed.createComponent(CommentsComponent);
    component = fixture.componentInstance;
  });

  it('render comments.components', () => {
    expect(component).toBeTruthy();
  });

  it('should call getCommentsData during ngOnInit', () => {
    const getCommentsDataSpy = jest.spyOn(component, 'getCommentsData');
    fixture.detectChanges();
    expect(getCommentsDataSpy).toHaveBeenCalled();
  });

  it('return data from getCommentsData to check api works', () => {
    component.getCommentsData();
    expect(mockApiService.getCommentsData).toHaveBeenCalled();
    expect(component.commentsData).toEqual([{ id: 1, test: 'comments' }]);
  });

  it('should handle error when fetching topics', () => {
    console.error = jest.fn();

    mockApiService.getCommentsData = jest.fn(() =>
      throwError('Failed to fetch topics')
    );
    component.getCommentsData();
    expect(mockApiService.getCommentsData).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(
      'Error fetching data:',
      'Failed to fetch topics'
    );
  });
});
