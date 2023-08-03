import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommentItemComponent } from '../../app/comments/comment-item/comment-item.component';
import { CommentItemService } from '../../app/comments/comment-item/comment-item.service';
import { of } from 'rxjs';

const mockCommentItemService = jasmine.createSpyObj('CommentItemService', [
  'getTopicById',
]);

describe('CommentItemComponent', () => {
  let component: CommentItemComponent;
  let fixture: ComponentFixture<CommentItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommentItemComponent],
      providers: [
        { provide: CommentItemService, useValue: mockCommentItemService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentItemComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call getComment and update commentData', () => {
    const mockCommentData = {
      id: 1,
      by: 'TestUser',
      text: 'Test comment',
      time: 1627955231,
      type: 'comment',
      kids: [2, 3],
      parent: 0,
    };

    // Set up the mock service response
    mockCommentItemService.getTopicById.and.returnValue(of(mockCommentData));

    // Set the commentId input
    component.commentId = 1;

    // Call ngOnInit to trigger getComment()
    component.ngOnInit();

    expect(component.commentData).toEqual(mockCommentData);
  });

  it('should not call getComment if commentId is not provided', () => {
    component.ngOnInit();
    expect(mockCommentItemService.getTopicById).not.toHaveBeenCalled();
  });
});
