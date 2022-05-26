import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  template: `
    <section
      *ngIf="bannerImage"
      class="top-banner"
      [class.position]="textAlign"
      [class.center]="textAlign === 'center'"
      [class.right]="textAlign === 'right'"
      [class.left]="textAlign === 'left'"
      style="background-image: url({{ bannerImage }});"
    >
      <h1 *ngIf="bannerTitle">
        <span class="top-banner--title__highlight" *ngIf="bannerTitleHighlight">
          {{ bannerTitleHighlight }}
        </span>
        <span class="top-banner--title">
          {{ bannerTitle }}
        </span>
      </h1>
    </section>
  `,
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  @Input('image') bannerImage: string | null;
  @Input('title') bannerTitle: string | null;
  @Input('title-highlight') bannerTitleHighlight: string | null;
  @Input('align') textAlign: 'center' | 'left' | 'right' | null;

  constructor() {
    this.bannerTitle = null;
    this.bannerImage = null;
    this.bannerTitleHighlight = null;
    this.textAlign = null;
  }
}
