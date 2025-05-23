import ProductDetail from '@/components/ProductDetail';
import { products } from '@/data/product';

interface PageProps {
  params: {
    id: string;
  };
}

export default async function ProductPage({ params }: PageProps) {
    const parameters = await params;
  const product = products.find(p => p.id === parseInt(parameters.id));

  return <ProductDetail product={product} />;
}