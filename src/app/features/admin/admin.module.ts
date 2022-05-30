import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductNewComponent } from './products/product-new/product-new.component';
import { ProductUpdateComponent } from './products/product-update/product-update.component';
import { MaterialModule } from 'src/app/materials/material.module';

@NgModule({
  declarations: [
    DashboardComponent,
    ProductListComponent,
    ProductNewComponent,
    ProductUpdateComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, SharedModule, MaterialModule],
})
export class AdminModule {}
