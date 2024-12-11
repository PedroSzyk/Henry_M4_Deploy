import Link from 'next/link'
import Card from '../Card/Card'
import { getProductsDB } from '@/helpers/product.helper'
import { IProduct } from '@/interfaces/Types'

const CardList = async () => {
  const products: IProduct[] = await getProductsDB()
  
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