import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CustomerHeaderComponent } from './customer-header/customer-header.component';
import { CustomerLayoutComponent } from './customer-layout/customer-layout.component';
import { CustomerFooterComponent } from './customer-footer/customer-footer.component';

@NgModule({
  declarations: [CustomerHeaderComponent, CustomerLayoutComponent, CustomerFooterComponent],
  imports: [RouterModule, CommonModule],
  exports: [CustomerHeaderComponent],
})
export class CustomerLayoutModule {}
