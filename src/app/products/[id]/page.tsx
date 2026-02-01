import ProductCard from '../../../components/ProductCard';
import ProductCounter from '../../../components/ProductCounter';
import { Product } from '../../../types';

export default async function ProductDetail(
  props: PageProps<'/products/[id]'>
) {
  const { id } = await props.params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/products/${id}`
  );
  const product: Product = await response.json();

  return (
    <div>
      <h2 className="text-center">상품 상세</h2>
      {product && (
        <ProductCard
          title={product.title}
          image={product.image}
          description={product.description}
        />
      )}
      {product && <ProductCounter />}
    </div>
  );
}
