import Link from 'next/link';
import Card from '../Card/Card';
import { getFeturedProducts } from '@/helpers/product.helper';
import { IProduct } from '@/interfaces/Types';

const HomeList = async () => {
    const featuredProducts: IProduct[] = await getFeturedProducts();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product: IProduct) => (
                <Link href={`/product/${product.id}`} key={product.id}>
                    <Card {...product} />
                </Link>
            ))}
        </div>
    );
};

export default HomeList;