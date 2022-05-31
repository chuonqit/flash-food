export interface AttributeElement {
  _id: string;
  name: string;
  price: number;
  type: 'size' | 'topping' | 'ice' | 'sugar';
  parentType: 'do-an' | 'do-uong';
}
