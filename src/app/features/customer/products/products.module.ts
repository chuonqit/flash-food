import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { FoodComponent } from './food/food.component';
import { DrinkComponent } from './drink/drink.component';

@NgModule({
  declarations: [FoodComponent, DrinkComponent],
  imports: [CommonModule, ProductsRoutingModule],
})
export class ProductsModule {}
