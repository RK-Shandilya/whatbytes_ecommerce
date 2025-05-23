"use client"
import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { categories, brands } from '../data/product';
import { FilterSection, RadioGroup, PriceRangeSlider } from '@/components/ui';

const Sidebar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [priceRange, setPriceRange] = useState([0, 3000]);

  useEffect(() => {
    const category = searchParams.get('category') || 'all';
    const brand = searchParams.get('brand') || 'all';
    const minPrice = parseInt(searchParams.get('minPrice') || '0');
    const maxPrice = parseInt(searchParams.get('maxPrice') || '3000');
    
    setSelectedCategory(category);
    setSelectedBrand(brand);
    setPriceRange([minPrice, maxPrice]);
  }, [searchParams]);

  const updateFilters = (newFilters: Record<string, string>) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    
    Object.keys(newFilters).forEach(key => {
      const value = newFilters[key];
      if (value === 'all' || value === '0' || (key === 'maxPrice' && value === '3000')) {
        current.delete(key);
      } else {
        current.set(key, value);
      }
    });

    const search = current.toString();
    const query = search ? `?${search}` : '';
    router.push(`/${query}`);
  };

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    updateFilters({ category: categoryId });
  };

  const handleBrandChange = (brandId: string) => {
    setSelectedBrand(brandId);
    updateFilters({ brand: brandId });
  };

  const handlePriceChange = (value: number[]) => {
    setPriceRange(value);
    updateFilters({
      minPrice: value[0].toString(),
      maxPrice: value[1].toString()
    });
  };

  const handleClearFilters = () => {
    setSelectedCategory('all');
    setSelectedBrand('all');
    setPriceRange([0, 3000]);
    router.push('/');
  };

  return (
    <div className="w-64 p-6 text-black">
      <div className="space-y-6">
        <FilterSection title="Filters" className="bg-background text-white flex flex-col gap-4">
          <div>
            <h4 className="text-sm font-medium mb-3 text-gray-300">Categories</h4>
            <RadioGroup
              options={categories}
              selected={selectedCategory}
              onChange={handleCategoryChange}
              name="category"
            />
          </div>
          
          <div>
            <h4 className="text-sm font-medium mb-3 text-gray-300">Price Range</h4>
            <PriceRangeSlider
              min={0}
              max={3000}
              value={priceRange}
              onChange={handlePriceChange}
            />
          </div>
        </FilterSection>

        <FilterSection title="Brands" className='bg-foreground text-black'>
          <RadioGroup
            options={brands}
            selected={selectedBrand}
            onChange={handleBrandChange}
            name="brand"
          />
        </FilterSection>

        <button
          onClick={handleClearFilters}
          className="w-full py-2 px-4 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-200 text-sm font-medium"
        >
          Clear All Filters
        </button>
      </div>
    </div>
  );
};

export default Sidebar;