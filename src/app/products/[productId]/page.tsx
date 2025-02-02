// /app/products/[id]/page.tsx
'use client'; // Make sure this is a client component

import { usePathname } from 'next/navigation';

const products = [
  { id: 1, name: 'Product 1', description: 'Description of Product 1', price: '$100' },
  { id: 2, name: 'Product 2', description: 'Description of Product 2', price: '$200' },
  { id: 3, name: 'Product 3', description: 'Description of Product 3', price: '$300' },
  { id: 4, name: 'Product 4', description: 'Description of Product 4', price: '$400' },
  { id: 5, name: 'Product 5', description: 'Description of Product 5', price: '$500' },
  { id: 6, name: 'Product 6', description: 'Description of Product 6', price: '$600' },
];

const ProductDetail = () => {
  const pathname = usePathname(); // Get the current pathname (e.g., /products/1)
  
  // Extract the ID from the pathname (e.g., /products/1 -> id = 1)
  const id = pathname?.split('/').pop();

  const product = products.find((p) => p.id.toString() === id);

  if (!product) {
    return <h1>Product Not Found</h1>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
    </div>
  );
};

export default ProductDetail;
