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
      <div className="relative h-48">
            <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-contain rounded-t-lg p-4"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                priority={false}
            />
      </div>
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
            {product.title}
          </h3>
          <div className="flex items-center justify-between mb-2">
            <div className='flex items-center gap-1'>
              <div className="flex items-center">
                {renderStars(product.rating)}
              </div>
              <span className="text-sm text-gray-600">
                ({product.rating})
              </span>
            </div>
            <span className="text-lg font-bold text-blue-600">
              ${product.price.toFixed(2)}
            </span>
          </div>
          <div className="mt-auto">
            <button
              onClick={handleAddToCart}
              className="w-full bg-background hover:bg-blue-800 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <ShoppingCart className="h-4 w-4" />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;