import { CategoryElement } from './Category.model';
import { ProductElement } from './Product.model';

export interface HomeElement {
  categories: CategoryElement[];
  productsNew: ProductElement[];
  productsPromotion: ProductElement[];
  productsDrink: ProductElement[];
  productsFood: ProductElement[];
}
