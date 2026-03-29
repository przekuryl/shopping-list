import type { Product } from '../types';

interface ProductItemProps {
  product: Product;
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
}

export function ProductItem({ product, onToggle, onRemove }: ProductItemProps) {
  const checked = product.isChecked;

  return (
    <div
      className={`group flex items-center gap-3 rounded-xl border p-3 transition-all duration-300 ${
        checked
          ? 'border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 opacity-60'
          : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm hover:shadow-md'
      }`}
    >
      {/* Custom checkbox */}
      <button
        onClick={() => onToggle(product.id)}
        className={`flex-none flex items-center justify-center h-6 w-6 rounded-full border-2 transition-all duration-200 ${
          checked
            ? 'border-primary bg-primary text-white'
            : 'border-gray-300 dark:border-gray-600 hover:border-primary'
        }`}
        aria-label={checked ? 'Uncheck item' : 'Check item'}
      >
        {checked && (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="h-3.5 w-3.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        )}
      </button>

      {/* Icon (emoji) */}
      {product.icon && (
        <span
          className={`flex-none text-xl leading-none select-none transition-all duration-300 ${
            checked ? 'grayscale opacity-50' : ''
          }`}
        >
          {product.icon}
        </span>
      )}

      {/* Product name — clickable to toggle */}
      <button
        onClick={() => onToggle(product.id)}
        className={`flex-1 text-left text-sm font-medium transition-all duration-200 ${
          checked
            ? 'line-through text-gray-400 dark:text-gray-500'
            : 'text-gray-800 dark:text-gray-100'
        }`}
      >
        {product.name}
      </button>

      {/* Remove button */}
      <button
        onClick={() => onRemove(product.id)}
        className="flex-none opacity-0 group-hover:opacity-100 focus:opacity-100 text-gray-300 hover:text-danger transition p-1 rounded-lg hover:bg-red-50 dark:hover:bg-red-950/30"
        aria-label="Remove item"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
        </svg>
      </button>
    </div>
  );
}
