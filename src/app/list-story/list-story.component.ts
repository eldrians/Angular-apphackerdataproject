import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { storyData } from '../shared/listStoryModel';

@Component({
  selector: 'app-list-story',
  templateUrl: './list-story.component.html',
  styleUrls: ['./list-story.component.css'],
})
export class ListStoryComponent {
  listId!: [];
  constructor(private api: ApiService) {
    this.getData();
    this.getDataStory();
  }
  getData() {
    this.api.getStoryId().subscribe((res: any) => {
      this.listId = res;
    });
  }

  getDataStory() {
    this.api.getStoryData().subscribe((data: any) => {
      console.log(data);
    });
  }
}
