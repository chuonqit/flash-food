import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss'],
})
export class FoodComponent implements OnInit {
  childrenAscii: string | null;

  constructor(private _activatedRoute: ActivatedRoute) {
    this.childrenAscii =
      this._activatedRoute.snapshot.paramMap.get('childrenAscii');
  }

  ngOnInit(): void {}
}
