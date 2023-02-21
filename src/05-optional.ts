export const createdProduct = (
  id: string | number,
  isNew?: boolean,
  stock?: number,
) => {
  return {
    id,
    isNew: isNew ?? true,
    stock: stock ?? 10,
  }
}

const p1 = createdProduct(1, false, 12);
console.log(p1);

const p2 = createdProduct(3);
console.log(p2);

const p3 = createdProduct(3, false, 0);
console.log(p3);
