import Link from 'next/link'
import Card from '../Card/Card'
import { IProduct } from '@/interfaces/Types'

interface CardListProps {
  products: IProduct[]
}

const CardList: React.FC<CardListProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products?.map((product) => (
        <Link href={`/product/${product.id}`} key={product.id}>
          <Card {...product} />
        </Link>
      ))}
    </div>
  )
}

export default CardList
