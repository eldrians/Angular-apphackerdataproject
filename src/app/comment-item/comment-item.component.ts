import { Component, Input } from '@angular/core';
import { CommentItemService } from './comment-item.service';
import { catchError, throwError } from 'rxjs';

interface InputData {
  by?: string;
  id?: number;
  kids?: number[];
  parent?: number;
  text?: string;
  time?: number;
  type?: string;
  dead?: boolean;
}

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
})
export class CommentItemComponent {
  @Input() commentId!: number;
  commentData!: InputData | undefined;

  constructor(private commentItemService: CommentItemService) {}

  async ngOnInit() {
    try {
      this.commentData = await this.commentItemService
        .getTopicById(this.commentId)
        .toPromise();
    } catch (error) {}
  }

  //   getComment() {
  //     this.commentItemService
  //       .getTopicById(this.commentId)
  //       .pipe(
  //         catchError((error) => {
  //           console.error('HTTP Error:', error);
  //           return throwError('Something went wrong; please try again later.');
  //         })
  //       )
  //       .subscribe((res) => {
  //         this.commentData = res as InputData;
  //       });
  //   }
  // }
}
