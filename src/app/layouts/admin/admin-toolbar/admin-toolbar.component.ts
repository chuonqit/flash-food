import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-admin-toolbar',
  templateUrl: './admin-toolbar.component.html',
  styleUrls: ['./admin-toolbar.component.scss'],
})
export class AdminToolbarComponent implements OnInit {
  @Output() sidenav: EventEmitter<any>;

  constructor() {
    this.sidenav = new EventEmitter();
  }

  ngOnInit(): void {}

  toggleSidenav() {
    this.sidenav.emit();
  }
}
