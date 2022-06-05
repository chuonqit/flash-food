import { Paginator } from 'src/app/shared/models/Paginator.model';
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

export interface CategoryPaginatorElement {
  data: CategoryElement[];
  paginator: Paginator;
}
