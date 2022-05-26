import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../../materials/material.module';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AdminToolbarComponent } from './admin-toolbar/admin-toolbar.component';
import { AdminSidenavComponent } from './admin-sidenav/admin-sidenav.component';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    AdminToolbarComponent,
    AdminSidenavComponent,
  ],
  imports: [RouterModule, CommonModule, MaterialModule],
  exports: [AdminLayoutComponent],
})
export class AdminLayoutModule {}
