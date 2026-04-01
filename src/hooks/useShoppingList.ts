import { useState, useEffect, useCallback } from 'react';
import type { Product } from '../types';
import { sectionRatingMap } from '../data/sections';

const STORAGE_KEY = 'shopping-list';

function loadProducts(): Product[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function useShoppingList() {
  const [products, setProducts] = useState<Product[]>(loadProducts);
  const [search, setSearch] = useState('');

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
  }, [products]);

  const addProduct = useCallback((name: string, icon?: string, section?: string) => {
    const trimmed = name.trim();
    if (!trimmed) return;
    const trimmedIcon = icon?.trim() || undefined;
    const trimmedSection = section?.trim() || undefined;
    setProducts((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        name: trimmed,
        ...(trimmedIcon && { icon: trimmedIcon }),
        ...(trimmedSection && { section: trimmedSection }),
        isChecked: false,
        createdAt: Date.now(),
      },
    ]);
  }, []);

  const toggleProduct = useCallback((id: string) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, isChecked: !p.isChecked } : p))
    );
  }, []);

  const removeProduct = useCallback((id: string) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  }, []);

  const filteredProducts = products
    .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (a.isChecked !== b.isChecked) return Number(a.isChecked) - Number(b.isChecked);
      const ratingA = a.section ? (sectionRatingMap.get(a.section) ?? Infinity) : Infinity;
      const ratingB = b.section ? (sectionRatingMap.get(b.section) ?? Infinity) : Infinity;
      if (ratingA !== ratingB) return ratingA - ratingB;
      return a.name.localeCompare(b.name);
    });

  return { products: filteredProducts, search, setSearch, addProduct, toggleProduct, removeProduct };
}
