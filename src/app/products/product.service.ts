import { faker } from '@faker-js/faker';

import { Product } from './product.model';
import { CreatedProductDto, UpdateProductDto, FindProductDto } from './product.dto';

export const products: Product[]= [];

export const addProduct = (data: CreatedProductDto): Product => {
  const newProduct = {
    ...data,
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    updateAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updateAt: faker.date.recent(),
    }
  }
  products.push(newProduct);
  return newProduct;
}

export const updateProduct = (id: Product['id'], changes: UpdateProductDto): Product => {
  const index = products.findIndex((item) => item.id === id);
  const prevData = products[index];
  products[index] = {
    ...prevData,
    ...changes,
  };
  return products[index];
}

export const findProduct = (dto: FindProductDto): Product[] => {
  // dto.color = 'blue';
  // dto.isNew = true;
  // dto.tags = [];
  // dto.tags?.pop();
  // dto.tags?.push();
  return products;
}

export const deleteProduct = (id: string, changes: Product) => {
  // code
}


