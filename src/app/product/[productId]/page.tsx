import { notFound } from 'next/navigation';
import { getProductsById } from '@/helpers/product.helper';
import ProductDetail from '@/views/ProductDetail/ProductDetail';

type DetailPageProps = Promise<{productId: string }>;
const Detail = async ({ params }: {params: DetailPageProps }) => {
  const { productId } = await params;

  if (!productId) {
    notFound();
  }

  try {
    const product = await getProductsById(await productId);
    return <ProductDetail {...product} />;
  } catch (error: unknown) {
    if (error instanceof Error && error.message === 'Product not Found') {
      notFound();
    }
    throw error;
  }
};

export default Detail;