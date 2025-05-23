"use client"
import Image from 'next/image';
import Link from 'next/link';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/cartContext';

export default function Cart() {
  const { items, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();

  const handleQuantityChange = (productId: number, newQuantity: number) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  if (items.length === 0) {
    return (
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 bg-blue-50 min-h-screen">
        <div className="text-center max-w-md mx-auto">
          <ShoppingBag className="h-12 w-12 sm:h-16 sm:w-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
            Your cart is empty
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
            Add some products to your cart to get started
          </p>
          <Link
            href="/"
            className="bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 inline-block text-sm sm:text-base"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-blue-50 text-black mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8 min-h-screen">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8 gap-4 sm:gap-0">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Shopping Cart</h1>
        <button
          onClick={clearCart}
          className="text-red-600 hover:text-red-800 text-sm font-medium self-start sm:self-auto"
        >
          Clear Cart
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="divide-y divide-gray-200">
          {items.map((item) => (
            <div key={item.id} className="p-4 sm:p-6">
              <div className="block sm:hidden">
                <div className="flex items-start space-x-3 mb-3">
                  <div className="flex-shrink-0 w-16 h-16 relative">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-medium text-gray-900 line-clamp-2 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-1">{item.brand}</p>
                    <p className="text-lg font-semibold text-blue-600">
                      ${item.price}
                    </p>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 p-2 -mt-2 -mr-2"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 bg-gray-50 rounded-lg px-3 py-2">
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      className="p-1 text-gray-400 hover:text-gray-600"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-8 text-center font-medium">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      className="p-1 text-gray-400 hover:text-gray-600"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="text-lg font-semibold text-gray-900">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              </div>

              <div className="hidden sm:flex items-center space-x-4">
                <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-medium text-gray-900 truncate">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500">{item.brand}</p>
                  <p className="text-lg font-semibold text-blue-600">
                    ${item.price}
                  </p>
                </div>

                <div className="flex items-center space-x-2 bg-gray-50 rounded-lg px-3 py-2">
                  <button
                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                    className="p-1 text-gray-400 hover:text-gray-600"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-8 text-center font-medium">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    className="p-1 text-gray-400 hover:text-gray-600"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>

                <div className="text-lg font-semibold text-gray-900 w-20 text-right">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 p-2"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 p-4 sm:p-6 bg-gray-50">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg sm:text-xl font-semibold text-gray-900">
              Total: ${getTotalPrice().toFixed(2)}
            </span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              href="/"
              className="flex-1 bg-gray-200 text-gray-800 py-3 px-4 sm:px-6 rounded-lg hover:bg-gray-300 transition-colors duration-200 text-center font-medium text-sm sm:text-base order-2 sm:order-1"
            >
              Continue Shopping
            </Link>
            <button className="flex-1 bg-background text-white py-3 px-4 sm:px-6 rounded-lg hover:bg-blue-800 transition-colors duration-200 font-medium cursor-pointer text-sm sm:text-base order-1 sm:order-2">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}