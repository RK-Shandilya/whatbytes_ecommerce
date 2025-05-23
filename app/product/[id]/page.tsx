import { use } from 'react';
import ProductDetail from '@/components/ProductDetail';
import { products } from '@/data/product';

export default function ProductPage(props: { params: Promise<{ id: string }> }) {
  const { id } = use(props.params);
  const product = products.find(p => p.id === parseInt(id));

  return <ProductDetail product={product} />;
}
