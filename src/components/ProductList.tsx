import type { Product } from '../types';
import { ProductItem } from './ProductItem';

interface ProductListProps {
  products: Product[];
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
}

export function ProductList({ products, onToggle, onRemove }: ProductListProps) {
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-gray-400 dark:text-gray-500">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="h-16 w-16 mb-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        </svg>
        <p className="text-sm font-medium">Your shopping list is empty</p>
        <p className="text-xs mt-1">Add some products to get started</p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
}
