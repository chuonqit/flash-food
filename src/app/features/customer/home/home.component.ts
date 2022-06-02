import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HomeElement } from 'src/app/shared/models/Home.model';
import { HomeService } from 'src/app/shared/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isLoading: boolean;
  homeData!: HomeElement;

  constructor(private _pageTitle: Title, private homeService: HomeService) {
    this.isLoading = true;
  }

  ngOnInit(): void {
    this.homeService.getHomeData().subscribe((data) => {
      this.homeData = data;
      this.isLoading = false;
    });
    this._pageTitle.setTitle('Trang chủ');
  }
}
