import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CustomerHeaderComponent } from './customer-header/customer-header.component';
import { CustomerLayoutComponent } from './customer-layout/customer-layout.component';

@NgModule({
  declarations: [CustomerHeaderComponent, CustomerLayoutComponent],
  imports: [RouterModule, CommonModule],
  exports: [CustomerHeaderComponent],
})
export class CustomerLayoutModule {}
