import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

interface BreadcrumbElement {
  label: string;
  url: string;
}

@Component({
  selector: 'app-breadcrumb',
  template: `
    <ul class="app-breadcrumb" *ngIf="breadcrumbs.length > 0">
      <ng-content></ng-content>
      <li class="app-breadcrumb--item" *ngFor="let breadcrumb of breadcrumbs">
        <a
          class="app-breadcrumb--link"
          [routerLink]="breadcrumb.url"
          *ngIf="breadcrumb.url; else breadcrumbText"
          [routerLinkActiveOptions]="{ exact: true }"
          routerLinkActive="app-breadcrumb--link__active"
        >
          {{ breadcrumb.label }}
        </a>
        <ng-template #breadcrumbText>
          <span>{{ breadcrumb.label }}</span>
        </ng-template>
      </li>
    </ul>
  `,
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbs: BreadcrumbElement[];

  constructor(private _activatedRoute: ActivatedRoute) {
    this.breadcrumbs = [];
  }

  ngOnInit(): void {
    this._activatedRoute.data.subscribe((dataItem) => {
      this.breadcrumbs = this.buildBreadCrumb(dataItem['breadcrumbs']);
    });
  }

  buildBreadCrumb(breadcrumbs: BreadcrumbElement[]) {
    return breadcrumbs || [];
  }
}
