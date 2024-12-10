import { IProduct } from '@/interfaces/Types';
import ProductDetailServer from '@/components/ProductDetailServer/ProductDetailServer';
import ProductDetailClient from '@/components/ProductDetailClient/ProductDetailClient';

const ProductDetail: React.FC<IProduct> = ({ id, name, description, price, image, stock, categoryId }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <ProductDetailServer
          id={id}
          name={name}
          description={description}
          price={price}
          image={image}
          stock={stock}
          categoryId={categoryId}
        />
        <ProductDetailClient
          id={id}
          name={name}
          description={description}
          price={price}
          image={image}
          stock={stock}
          categoryId={categoryId}
        />
      </div>
    </div>
  );
};

export default ProductDetail;