import { NgModule } from '@angular/core';
import { AdminLayoutModule } from './admin/admin-layout.module';
import { CustomerLayoutModule } from './customer/customer-layout.module';

@NgModule({
  exports: [AdminLayoutModule, CustomerLayoutModule],
})
export class LayoutModule {}
