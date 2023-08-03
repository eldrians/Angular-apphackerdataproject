import { Component, Input } from '@angular/core';
import { CommentItemService } from './comment-item.service';
import { catchError, throwError } from 'rxjs';
import { ApiService } from '../../services/api/api.service';

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

  constructor(
    private commentItemService: CommentItemService,
    private api: ApiService
  ) {}

  ngOnInit() {
    this.getTopicItem();
  }

  getTopicItem() {
    this.api.getTopicItem(this.commentId).subscribe(
      (res) => {
        this.commentData = res as InputData;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
