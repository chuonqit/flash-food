import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.scss'],
})
export class DrinkComponent implements OnInit {
  childrenAscii: string | null;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _pageTitle: Title
  ) {
    this._pageTitle.setTitle('Đồ uống');
    this.childrenAscii =
      this._activatedRoute.snapshot.paramMap.get('childrenAscii');
  }

  ngOnInit(): void {
    if (this.childrenAscii) {
      this._pageTitle.setTitle('Đồ uống ' + this.childrenAscii);
    }
  }
}
