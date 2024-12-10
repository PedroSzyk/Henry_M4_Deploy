import CardList from '@/components/CardList/CardList'
import React from 'react'
import { IProduct } from '@/interfaces/Types'

interface ProductsViewProps {
  products: IProduct[]
}

const ProductsView: React.FC<ProductsViewProps> = ({ products }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 font-['Helvetica','Arial',sans-serif]">
        Vintage Apple Products
      </h1>
      <CardList products={products} />
    </div>
  )
}

export default ProductsView
