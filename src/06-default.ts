export const createdProduct = (
  id: string | number,
  isNew: boolean = true,
  stock: number = 10,
) => {
  return {
    id,
    isNew,
    stock,
  }
}

const p1 = createdProduct(1, false, 12);
console.log(p1);

const p2 = createdProduct(3);
console.log(p2);

const p3 = createdProduct(5, false, 0);
console.log(p3);
