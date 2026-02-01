import { Product } from '../../types';
import Link from 'next/link';
import ProductCard from '../../components/ProductCard';

export default async function Products() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/products`
  );
  const products = await response.json();

  return (
    <div>
      <h2 className="text-center">상품 목록</h2>
      <ul className="grid grid-cols-3 gap-8">
        {products.map((product: Product) => (
          <Link href={`/products/${product.id}`} key={product.id}>
            <ProductCard title={product.title} image={product.image} />
          </Link>
        ))}
      </ul>
    </div>
  );
}
