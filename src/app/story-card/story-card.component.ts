import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-story-card',
  templateUrl: './story-card.component.html',
  styleUrls: ['./story-card.component.css'],
})
export class StoryCardComponent {
  constructor() {}

  @Input() idStory: any;
}
