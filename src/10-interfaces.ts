type Sizes = 'S' | 'M' | 'L' | 'XL';

// type Product = {
//   id: string | number,
//   title: string,
//   createdAt: Date;
//   stock: number,
//   size: Sizes,
// }

interface Product { // interface se puede extender
  id: string | number,
  title: string,
  createdAt: Date;
  stock: number,
  size: Sizes,
}

const products: Product[]= [];

products.push({
  id: 1,
  title: 'P1',
  createdAt: new Date(),
  stock: 10,
  size: 'L'
})

const addProduct = (data: Product) => {
  products.push(data);
}
