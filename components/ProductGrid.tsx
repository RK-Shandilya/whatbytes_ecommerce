"use client"
import ProductCard from './ProductCard';
import { Product } from '@/types';

const ProductGrid = ({ products }: { products: Product[] }) => {
    if (products.length === 0) {
        return (
          <div className='flex items-center justify-center min-h-[60vh] px-4 w-full'>
            <div className="text-center max-w-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No products found
              </h3>
              <p className="text-gray-600">
                Try adjusting your filters or search query
              </p>
            </div>
          </div>
        );
    }

    return (
        <div className="flex-1 p-3 sm:p-4 md:p-6 lg:p-8 w-full h-full">
          <h1 className='text-black p-2 sm:p-3 font-bold text-2xl sm:text-3xl mb-4 sm:mb-6'>Product Listing</h1>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      );
};

export default ProductGrid;