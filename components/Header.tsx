"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, FormEvent } from 'react';
import { Search, ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '../context/cartContext';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { getTotalItems } = useCart();
  const router = useRouter();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/?search=${encodeURIComponent(searchQuery.trim())}`);
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="bg-background shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hidden md:flex items-center justify-between h-16">
          <Link href="/" className="flex-shrink-0">
            <div className="text-2xl font-bold text-white">
              WhatBytes
            </div>
          </Link>

          <div className="flex items-center justify-between max-w-xl w-full space-x-4">
            <div className="flex-1 w-full">
              <form onSubmit={handleSearch} className="relative">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-xl leading-5 placeholder-gray-200 focus:outline-none focus:placeholder-gray-300 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Search for products..."
                  />
                </div>
              </form>
            </div>

            <div className="flex items-center space-x-4">
              <Link href="/cart" className="relative p-2 text-gray-600 hover:text-blue-600">
                <button className='flex items-center gap-2 bg-blue-950 rounded-xl px-4 py-2 text-white hover:bg-blue-900 cursor-pointer'>
                  <ShoppingCart className="h-4 w-4" /> 
                  <span>Cart</span>
                </button>
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>

        <div className="md:hidden flex items-center justify-between h-16">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-500 hover:text-white focus:outline-none"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          <Link href="/" className="flex-shrink-0">
            <div className="text-2xl font-bold text-white">
              WhatBytes
            </div>
          </Link>

          <Link href="/cart" className="relative p-2">
            <button className='flex items-center gap-2 bg-blue-950 rounded-xl px-3 py-2 text-white hover:bg-blue-900 cursor-pointer'>
              <ShoppingCart className="h-4 w-4" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </button>
          </Link>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <form onSubmit={handleSearch} className="mt-2 px-2">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-xl leading-5 placeholder-gray-200 focus:outline-none focus:placeholder-gray-300 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Search for products..."
                />
              </div>
            </form>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;