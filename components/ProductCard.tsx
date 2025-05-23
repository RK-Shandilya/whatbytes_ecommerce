import Link from 'next/link';
import Image from 'next/image';
import { Star, ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/cartContext';
import { Product } from '@/types';

const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <Link href={`/product/${product.id}`}>
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer h-full flex flex-col">
        <div className="relative h-40 sm:h-44 md:h-48 lg:h-52 p-3 sm:p-4">
            <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-contain rounded-t-lg p-2"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                priority={false}
            />
        </div>
        <div className="p-3 sm:p-4 flex flex-col flex-grow">
            <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-2 line-clamp-2 leading-tight">
                {product.title}
            </h3>
        
            <div className="flex items-center justify-between mb-2">
                <div className='flex items-center gap-1'>
                    <div className="flex items-center">
                    {renderStars(product.rating)}
                    </div>
                    <span className="text-xs text-gray-600">
                    ({product.rating})
                    </span>
                </div>
                <span className="text-base sm:text-lg font-bold text-blue-600">
                    ${product.price.toFixed(2)}
                </span>
            </div>
        
            <div className="mt-auto">
                <button
                    onClick={handleAddToCart}
                    className="w-full bg-blue-600 hover:bg-blue-800 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 text-xs sm:text-sm"
                >
                    <ShoppingCart className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span>Add to Cart</span>
                </button>
            </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;