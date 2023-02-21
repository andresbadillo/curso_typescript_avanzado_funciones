import { Product } from './product.model';

// type createdProductDto = Omit<Product, 'id' | 'createdAt' | 'updateAt' | 'category'>;

export interface CreatedProductDto extends Omit<Product, 'id' | 'createdAt' | 'updateAt' | 'category'> {
  categoryId: string;
};

/* Ejemplo 1 */
type example = Pick<Product, 'color' | 'description'>;

export interface UpdateProductDto extends Partial<CreatedProductDto> {};

/* Ejemplo 2 */
type example2 = Required<Product>; // Hace todos los campos obligatorios

export interface FindProductDto extends Readonly<Partial<Omit<Product, 'tags'>>> {
  readonly tags: ReadonlyArray<string>;
};

/* Ejemplo 3 */
type example3 = Readonly<Product>;
