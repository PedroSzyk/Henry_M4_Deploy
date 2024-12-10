'use client'

import React from 'react'
import Image from 'next/image'
import { IProduct } from '@/interfaces/Types'

const Card: React.FC<IProduct> = ({ name, price, image, stock }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <div className="relative h-64 w-full">
        <Image 
          src={image} 
          alt={name} 
          fill
          className="object-contain"
        />
      </div>
      <div className="p-4">
        <h2 className="text-subtitle text-primary mb-2">{name}</h2>
        <div className="flex justify-between items-center">
          <p className="text-body text-primary font-bold">${price.toFixed(2)}</p>
          <p className={`text-body ${stock > 0 ? 'text-green-500' : 'text-red-500'} font-semibold`}>
            {stock > 0 ? `In Stock (${stock})` : 'Out of Stock'}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card