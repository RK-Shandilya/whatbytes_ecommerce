import ProductDetail from '@/components/ProductDetail';
import { products } from '@/data/product';
import { use } from 'react';

export default function ProductPage({ params }:  { params: Promise<{ id: string }> }) {
    const { id } = use(params);
  const product = products.find(p => p.id === parseInt(id));

  return <ProductDetail product={product} />;
}