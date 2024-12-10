import { IProduct } from '@/interfaces/Types';
import Image from 'next/image';

const ProductDetailServer: React.FC<IProduct> = ({ name, description, price, image, stock }) => {
  return (
    <div className="flex flex-col lg:flex-row items-start gap-6 p-6">
      <div className="w-full lg:w-1/3">
        <Image
          src={image}
          alt={name}
          width={500}
          height={500}
          className="w-full h-auto object-cover rounded-md"
        />
      </div>
      <div className="w-full lg:w-2/3 flex flex-col">
        <h1 className="text-title text-primary">{name}</h1>
        <p className="text-body text-secondary mt-spacing">{description}</p>
        <div className="mt-spacing">
          <p className="text-subtitle text-primary font-bold">Price: ${price.toFixed(2)}</p>
          <p
            className={`text-body ${
              stock > 0 ? 'text-green-500' : 'text-red-500'
            } font-semibold mt-2`}
          >
            {stock > 0 ? `In Stock (${stock})` : 'Out of Stock'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailServer;