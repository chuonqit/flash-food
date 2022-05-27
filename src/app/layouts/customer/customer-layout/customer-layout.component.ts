import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-layout',
  templateUrl: './customer-layout.component.html',
  styleUrls: ['./customer-layout.component.scss'],
})
export class CustomerLayoutComponent implements OnInit, OnDestroy {
  public isScrollTop: boolean;

  constructor() {
    this.isScrollTop = false;
  }

  checkPageYOffset = () => {
    const position = window.pageYOffset;
    if (position > 500) {
      this.isScrollTop = true;
    } else {
      this.isScrollTop = false;
    }
  };

  ngOnInit(): void {
    window.addEventListener('scroll', this.checkPageYOffset);
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.checkPageYOffset);
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
