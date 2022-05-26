import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.scss'],
})
export class DrinkComponent implements OnInit {
  childrenAscii: string | null;

  constructor(private _activatedRoute: ActivatedRoute) {
    this.childrenAscii =
      this._activatedRoute.snapshot.paramMap.get('childrenAscii');
  }

  ngOnInit(): void {}
}
