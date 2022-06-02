import { AttributeElement } from './Attribute.model';
import { CategoryElement } from './Category.model';
import { Paginator } from './Paginator.model';

export interface ProductElementTest {
  id: number;
  name: string;
  image: string;
  price: number;
}

export interface ProductElement {
  _id: string;
  name: string;
  image: string;
  price: number;
  newPrice: number;
  description: string;
  category: string | CategoryElement;
  type: 'do-an' | 'do-uong';
  attributes: {
    size: string[] | AttributeElement[];
    topping: string[] | AttributeElement[];
    ice: string[] | AttributeElement[];
    sugar: string[] | AttributeElement[];
  };
}

export interface ProductsCategoryElement {
  category: CategoryElement;
  products: ProductElement[];
}

export interface ProductPaginatorElement {
  data: ProductElement[];
  paginator: Paginator;
}

export const PRODUCT_DATA: ProductElementTest[] = [
  {
    id: 1,
    name: 'Product',
    image: 'https://tea-3.lozi.vn/v1/images/resized/category-web-21-1590397610',
    price: 22000,
  },
  {
    id: 1,
    name: 'Product',
    image:
      'https://tea-3.lozi.vn/v1/ship/resized/banh-trang-huyen-linh-huyen-thanh-tri-ha-noi-1646756142992639856-banh-trang-tron-1646756465?w=200&type=o',
    price: 231000,
  },
  {
    id: 1,
    name: 'Product',
    image:
      'https://tea-3.lozi.vn/v1/ship/resized/banh-trang-huyen-linh-huyen-thanh-tri-ha-noi-1646756142992639856-banh-trang-tron-1646756465?w=200&type=o',
    price: 214000,
  },
  {
    id: 1,
    name: 'Product',
    image:
      'https://tea-3.lozi.vn/v1/ship/resized/banh-trang-huyen-linh-huyen-thanh-tri-ha-noi-1646756142992639856-banh-trang-tron-1646756465?w=200&type=o',
    price: 210100,
  },
  {
    id: 1,
    name: 'Product',
    image:
      'https://tea-3.lozi.vn/v1/ship/resized/banh-trang-huyen-linh-huyen-thanh-tri-ha-noi-1646756142992639856-banh-trang-tron-1646756465?w=200&type=o',
    price: 21000,
  },
  {
    id: 1,
    name: 'Product',
    image:
      'https://tea-3.lozi.vn/v1/ship/resized/banh-trang-huyen-linh-huyen-thanh-tri-ha-noi-1646756142992639856-banh-trang-tron-1646756465?w=200&type=o',
    price: 21000,
  },
  {
    id: 1,
    name: 'Product',
    image:
      'https://tea-3.lozi.vn/v1/ship/resized/banh-trang-huyen-linh-huyen-thanh-tri-ha-noi-1646756142992639856-banh-trang-tron-1646756465?w=200&type=o',
    price: 21000,
  },
  {
    id: 1,
    name: 'Product',
    image:
      'https://tea-3.lozi.vn/v1/ship/resized/banh-trang-huyen-linh-huyen-thanh-tri-ha-noi-1646756142992639856-banh-trang-tron-1646756465?w=200&type=o',
    price: 21000,
  },
  {
    id: 1,
    name: 'Product',
    image:
      'https://tea-3.lozi.vn/v1/ship/resized/banh-trang-huyen-linh-huyen-thanh-tri-ha-noi-1646756142992639856-banh-trang-tron-1646756465?w=200&type=o',
    price: 21000,
  },
  {
    id: 1,
    name: 'Product',
    image:
      'https://tea-3.lozi.vn/v1/ship/resized/banh-trang-huyen-linh-huyen-thanh-tri-ha-noi-1646756142992639856-banh-trang-tron-1646756465?w=200&type=o',
    price: 21000,
  },
  {
    id: 1,
    name: 'Product',
    image:
      'https://tea-3.lozi.vn/v1/ship/resized/banh-trang-huyen-linh-huyen-thanh-tri-ha-noi-1646756142992639856-banh-trang-tron-1646756465?w=200&type=o',
    price: 21000,
  },
  {
    id: 1,
    name: 'Product',
    image:
      'https://tea-3.lozi.vn/v1/ship/resized/banh-trang-huyen-linh-huyen-thanh-tri-ha-noi-1646756142992639856-banh-trang-tron-1646756465?w=200&type=o',
    price: 21000,
  },
  {
    id: 1,
    name: 'Product',
    image:
      'https://tea-3.lozi.vn/v1/ship/resized/banh-trang-huyen-linh-huyen-thanh-tri-ha-noi-1646756142992639856-banh-trang-tron-1646756465?w=200&type=o',
    price: 21000,
  },
  {
    id: 1,
    name: 'Product',
    image:
      'https://tea-3.lozi.vn/v1/ship/resized/banh-trang-huyen-linh-huyen-thanh-tri-ha-noi-1646756142992639856-banh-trang-tron-1646756465?w=200&type=o',
    price: 21000,
  },
  {
    id: 1,
    name: 'Product',
    image:
      'https://tea-3.lozi.vn/v1/ship/resized/banh-trang-huyen-linh-huyen-thanh-tri-ha-noi-1646756142992639856-banh-trang-tron-1646756465?w=200&type=o',
    price: 21000,
  },
  {
    id: 1,
    name: 'Product',
    image:
      'https://tea-3.lozi.vn/v1/ship/resized/banh-trang-huyen-linh-huyen-thanh-tri-ha-noi-1646756142992639856-banh-trang-tron-1646756465?w=200&type=o',
    price: 21000,
  },
  {
    id: 1,
    name: 'Product',
    image:
      'https://tea-3.lozi.vn/v1/ship/resized/banh-trang-huyen-linh-huyen-thanh-tri-ha-noi-1646756142992639856-banh-trang-tron-1646756465?w=200&type=o',
    price: 21000,
  },
  {
    id: 1,
    name: 'Product',
    image:
      'https://tea-3.lozi.vn/v1/ship/resized/banh-trang-huyen-linh-huyen-thanh-tri-ha-noi-1646756142992639856-banh-trang-tron-1646756465?w=200&type=o',
    price: 21000,
  },
  {
    id: 1,
    name: 'Product',
    image:
      'https://tea-3.lozi.vn/v1/ship/resized/banh-trang-huyen-linh-huyen-thanh-tri-ha-noi-1646756142992639856-banh-trang-tron-1646756465?w=200&type=o',
    price: 21000,
  },
  {
    id: 1,
    name: 'Product',
    image:
      'https://tea-3.lozi.vn/v1/ship/resized/banh-trang-huyen-linh-huyen-thanh-tri-ha-noi-1646756142992639856-banh-trang-tron-1646756465?w=200&type=o',
    price: 21000,
  },
  {
    id: 1,
    name: 'Product',
    image:
      'https://tea-3.lozi.vn/v1/ship/resized/banh-trang-huyen-linh-huyen-thanh-tri-ha-noi-1646756142992639856-banh-trang-tron-1646756465?w=200&type=o',
    price: 21000,
  },
  {
    id: 1,
    name: 'Product',
    image:
      'https://tea-3.lozi.vn/v1/ship/resized/banh-trang-huyen-linh-huyen-thanh-tri-ha-noi-1646756142992639856-banh-trang-tron-1646756465?w=200&type=o',
    price: 21000,
  },
  {
    id: 1,
    name: 'Product',
    image:
      'https://tea-3.lozi.vn/v1/ship/resized/banh-trang-huyen-linh-huyen-thanh-tri-ha-noi-1646756142992639856-banh-trang-tron-1646756465?w=200&type=o',
    price: 21000,
  },
  {
    id: 1,
    name: 'Product',
    image:
      'https://tea-3.lozi.vn/v1/ship/resized/banh-trang-huyen-linh-huyen-thanh-tri-ha-noi-1646756142992639856-banh-trang-tron-1646756465?w=200&type=o',
    price: 21000,
  },
];

export interface TestProduct {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
