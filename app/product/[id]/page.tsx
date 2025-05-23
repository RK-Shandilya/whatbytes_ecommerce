import ProductDetail from '@/components/ProductDetail';
import { products } from '@/data/product';

interface PageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: PageProps) {
  const product = products.find(p => p.id === parseInt(params.id));
  return <ProductDetail product={product} />;
}
