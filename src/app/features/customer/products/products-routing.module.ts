import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerLayoutComponent } from 'src/app/layouts/customer/customer-layout/customer-layout.component';
import { DrinkComponent } from './drink/drink.component';
import { FoodComponent } from './food/food.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerLayoutComponent,
    children: [
      {
        path: 'do-an',
        component: FoodComponent,
      },
      {
        path: 'do-uong',
        component: DrinkComponent,
      },
      {
        path: 'do-an/:childrenAscii',
        component: FoodComponent,
      },
      {
        path: 'do-uong/:childrenAscii',
        component: DrinkComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
