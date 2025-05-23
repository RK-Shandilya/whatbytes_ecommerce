"use client"
import ProductGrid from "@/components/ProductGrid";
import Sidebar from "@/components/Sidebar";
import { products } from "@/data/product";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    let filtered = [...products];

    const search = searchParams.get('search');
    if (search) {
      const searchTerm = search.toLowerCase();
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm) ||
        product.brand.toLowerCase().includes(searchTerm)
      );
    }

    const category = searchParams.get('category');
    if (category && category !== 'all') {
      filtered = filtered.filter(product =>
        product.category === category
      );
    }

    const brand = searchParams.get('brand');
    if (brand && brand !== 'all') {
      filtered = filtered.filter(product =>
        product.brand === brand
      );
    }

    const minPrice = parseInt(searchParams.get('minPrice') || '0');
    const maxPrice = parseInt(searchParams.get('maxPrice') || '3000');
    filtered = filtered.filter(product =>
      product.price >= minPrice && product.price <= maxPrice
    );

    setFilteredProducts(filtered);
  }, [searchParams]);

  return (
    <div className="flex bg-blue-50">
      <Sidebar />
      <div className="mx-auto">
        <ProductGrid products={filteredProducts} />
      </div>
    </div>
  );
}
