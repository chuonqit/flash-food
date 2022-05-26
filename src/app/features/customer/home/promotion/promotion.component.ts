import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.scss'],
})
export class PromotionComponent implements OnInit {
  constructor(private _pageTitle: Title) {
    this._pageTitle.setTitle('Khuyến mãi');
  }

  ngOnInit(): void {}
}
