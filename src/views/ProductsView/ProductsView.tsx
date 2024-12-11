import CardList from '@/components/CardList/CardList'
import React from 'react'

const ProductsView = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 font-['Helvetica','Arial',sans-serif]">
        Vintage Apple Products
      </h1>
      <CardList />
    </div>
  )
}

export default ProductsView