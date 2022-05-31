import { DrinkMoreComponent } from './products/drink/drink-more/drink-more.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerLayoutComponent } from 'src/app/layouts/customer/customer-layout/customer-layout.component';
import { HomeComponent } from './home/home.component';
import { PromotionComponent } from './promotion/promotion.component';
import { DrinkComponent } from './products/drink/drink.component';
import { FoodComponent } from './products/food/food.component';
import { FoodMoreComponent } from './products/food/food-more/food-more.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'khuyen-mai',
        component: PromotionComponent,
      },
      {
        path: 'do-an',
        component: FoodComponent,
      },
      {
        path: 'do-uong',
        component: DrinkComponent,
      },
      {
        path: 'do-an/:ascii',
        component: FoodMoreComponent,
      },
      {
        path: 'do-uong/:ascii',
        component: DrinkMoreComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule {}
