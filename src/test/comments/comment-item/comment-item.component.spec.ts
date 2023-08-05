import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommentItemComponent } from '../../../app/comments/comment-item/comment-item.component';

describe('CommentItemComponent', () => {
  let component: CommentItemComponent;
  let fixture: ComponentFixture<CommentItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommentItemComponent],
    });

    fixture = TestBed.createComponent(CommentItemComponent);
    component = fixture.componentInstance;
  });

  it('render comment-data.component', () => {
    expect(component).toBeTruthy();
  });
});
