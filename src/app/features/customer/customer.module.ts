import { HttpClientModule } from '@angular/common/http';
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
import { MaterialModule } from 'src/app/materials/material.module';
import { FoodMoreComponent } from './products/food/food-more/food-more.component';
import { DrinkMoreComponent } from './products/drink/drink-more/drink-more.component';

@NgModule({
  declarations: [
    HomeComponent,
    PromotionComponent,
    BannerComponent,
    CategoriesComponent,
    FoodComponent,
    DrinkComponent,
    FoodMoreComponent,
    DrinkMoreComponent,
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    SharedModule,
    MaterialModule,
    HttpClientModule,
  ],
})
export class CustomerModule {}
