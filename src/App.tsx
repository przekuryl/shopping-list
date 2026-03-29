import { useShoppingList } from './hooks/useShoppingList';
import { SearchBar } from './components/SearchBar';
import { AddProductForm } from './components/AddProductForm';
import { ProductList } from './components/ProductList';

function App() {
  const { products, search, setSearch, addProduct, toggleProduct, removeProduct } =
    useShoppingList();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="mx-auto max-w-lg px-4 py-8">
        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7 text-primary">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
            Shopping List
          </h1>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Tap items to mark them as bought
          </p>
        </div>

        {/* Search */}
        <div className="mb-4">
          <SearchBar value={search} onChange={setSearch} />
        </div>

        {/* Add product form */}
        <div className="mb-6">
          <AddProductForm onAdd={addProduct} />
        </div>

        {/* Product list */}
        <ProductList
          products={products}
          onToggle={toggleProduct}
          onRemove={removeProduct}
        />
      </div>
    </div>
  );
}

export default App;
