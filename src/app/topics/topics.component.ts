import { Component } from '@angular/core';
import { TopicsService } from './topics.service';

@Component({
  selector: 'app-topics',
  template: `
    <ul class="w-full grid grid-cols-2 gap-3">
      <app-topic-item
        *ngFor="let id of topicsId; let i = index"
        [topicId]="id"
        [class.col-span-2]="isFourthItem(i)"
        [isCard]="checkCard(i)"
      >
      </app-topic-item>
    </ul>
  `,
})
export class TopicsComponent {
  topicsId: number[] = [];
  gridStyle = true;

  constructor(private topicsService: TopicsService) {}

  ngOnInit() {
    this.getTopicsId();
  }

  getTopicsId() {
    this.topicsService.getTopics().subscribe(
      (res) => {
        this.topicsId = res as number[];
      },
      (error) => {
        console.log('axel');
      }
    );
  }

  isFourthItem(index: number): boolean {
    this.gridStyle =
      index === 0 ? false : index % 4 === 0 ? !this.gridStyle : this.gridStyle;
    return this.gridStyle === true;
  }

  checkCard(index: number): boolean {
    return true;
  }
}
