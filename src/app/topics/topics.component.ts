import { Component } from '@angular/core';
import { TopicsService } from './topics.service';

@Component({
  selector: 'app-topics',
  template: `
    <ul class="w-full grid grid-cols-2 gap-3">
      <app-topic-item
        *ngFor="let id of topicsId; let i = index; let j = index"
        [topicId]="id"
        [isCard]="checkCard(i)"
        [class.col-span-2]="checkGrid(i)"
      >
      </app-topic-item>
    </ul>
  `,
})
export class TopicsComponent {
  topicsId: number[] = [];
  gridStyle = true;
  isCards = false;

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

  checkCard(index: number): boolean {
    this.isCards =
      index === 0 ? false : index % 4 === 0 ? !this.isCards : this.isCards;
    return this.isCards === true;
  }

  checkGrid(index: number): boolean {
    this.gridStyle =
      index === 0 ? false : index % 4 === 0 ? !this.gridStyle : this.gridStyle;
    return this.gridStyle === true;
  }
}
