import { Category } from '../categories/category.model'
import { BaseModel } from '../base.model'

export type Sizes = 'S' | 'M' | 'L' | 'XL';

export interface Product extends BaseModel { // interface se puede extender
  title: string;
  image: string;
  description: string;
  stock: number;
  size?: Sizes;
  color: string;
  price: number;
  category: Category;
  isNew: boolean;
  tags: string[];
}
