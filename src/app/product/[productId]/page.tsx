import { notFound } from 'next/navigation';
import { getProductsById } from '@/helpers/product.helper';
import ProductDetail from '@/views/ProductDetail/ProductDetail';

const Detail = async ({ params }: { params: { productId: string } }) => {
  const { productId } = await Promise.resolve(params);

  if (!productId) {
    notFound();
  }

  try {
    const product = await getProductsById(productId);
    return <ProductDetail {...product} />;
  } catch (error: unknown) {
    if (error instanceof Error && error.message === 'Product not Found') {
      notFound();
    }
    throw error;
  }
};

export default Detail;