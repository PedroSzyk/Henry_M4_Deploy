'use client'

import { CartContext } from '@/contexts/CartContext';
import { IProduct } from '@/interfaces/Types';
import { useContext, useState } from 'react';

const ProductDetailClient: React.FC<IProduct> = ({ id, name, description, price, image, stock, categoryId }) => {
  const { cart, addToCart } = useContext(CartContext);
  const isAuthenticated = !!localStorage.getItem('user');
  const [cartUpdated, setCartUpdated] = useState(false);

  const handleAddToCart = () => {
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    if (!user) {
      alert('You need to log in to add items to the cart');
      return;
    }

    const isProductInCart = cart.some((product) => product.id === id);

    if (isProductInCart) {
      alert('This product is already in your cart');
      return;
    }

    const newItem: IProduct = { id, name, description, price, image, stock, categoryId };
    addToCart(newItem);
    setCartUpdated(true);
    alert('Product added to cart');
  };

  return (
    <div className="p-6 bg-gray-50 border-t border-gray-300">
      {isAuthenticated && stock > 0 && (
        <button
          className="button-primary w-full md:w-auto"
          onClick={handleAddToCart}
        >
          {cartUpdated ? 'Added to Cart' : 'Add to Cart'}
        </button>
      )}
      {!isAuthenticated && stock > 0 && (
        <p className="text-body text-red-500">Please log in to add to cart</p>
      )}
      {stock === 0 && (
        <p className="text-body text-red-500">This product is currently out of stock</p>
      )}
    </div>
  );
};

export default ProductDetailClient;