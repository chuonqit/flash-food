export interface HomeCategoryElement {
  id: number;
  name: string;
  image: string;
  nameAscii: string;
  parentName: string;
  parentAscii: string;
}

export interface CategoryElement {
  _id: string;
  name: string;
  image: string;
  nameAscii: string;
  type: 'do-an' | 'do-uong';
}
