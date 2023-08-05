import { Component, Input } from '@angular/core';
import { ApiService } from '../services/api/api.service';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
})
export class CommentsComponent {
  @Input() commentsId?: number[] = [];
  commentsIdx: number[] = [];
  commentsData: any[] = [];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.getCommentsData();
  }

  getCommentsData() {
    if (this.commentsId) {
      this.api.getCommentsData(this.commentsId).subscribe(
        (data) => {
          this.commentsData = data;
          // console.log(this.commentsData)
          // const dataComments = JSON.stringify(data);
          // localStorage.setItem('dataComments', dataComments);
        },
        (error) => {
          console.error('Error fetching data:', error);
        }
      );
    }
  }
}
