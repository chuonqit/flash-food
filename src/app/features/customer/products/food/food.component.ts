import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss'],
})
export class FoodComponent implements OnInit {
  childrenAscii: string | null;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _pageTitle: Title
  ) {
    this._pageTitle.setTitle('Đồ ăn');
    this.childrenAscii =
      this._activatedRoute.snapshot.paramMap.get('childrenAscii');
  }

  ngOnInit(): void {}
}
