import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './home/components/banner/banner.component';
import { CategoriesComponent } from './home/components/categories/categories.component';
import { PromotionComponent } from './promotion/promotion.component';
import { FoodComponent } from './products/food/food.component';
import { DrinkComponent } from './products/drink/drink.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    PromotionComponent,
    BannerComponent,
    CategoriesComponent,
    FoodComponent,
    DrinkComponent,
  ],
  imports: [CommonModule, CustomerRoutingModule, SharedModule],
})
export class CustomerModule {}
