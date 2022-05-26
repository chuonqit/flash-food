import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-newsfeed',
  template: `
    <section class="newsfeed">
      <div class="newsfeed--title">
        <h2>{{ title }}</h2>
      </div>
      <div class="newsfeed--content">
        <ng-content></ng-content>
      </div>
    </section>
  `,
  styleUrls: ['./newsfeed.component.scss'],
})
export class NewsfeedComponent implements OnInit {
  @Input() title: string | null;

  constructor() {
    this.title = null;
  }

  ngOnInit(): void {}
}
