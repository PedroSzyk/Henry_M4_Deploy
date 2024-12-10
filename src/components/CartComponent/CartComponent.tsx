'use client'

import { useContext } from "react";
import Image from "next/image";
import { CartContext } from "@/contexts/CartContext";
import { buyOrder } from "@/helpers/orders.helper";
import { UserContext } from "@/contexts/UserContext";

const CartComponent = () => {
  const { cart, clearCart, removeFromCart } = useContext(CartContext);
  const { user, updateOrders } = useContext(UserContext);

  const handleCart = async () => {
    if (user) {
      const res = await buyOrder({ cart, user });

      if (res.status === "approved") {
        clearCart();
        updateOrders({
          id: res.id,
          status: res.status,
          date: res.date,
        });
        alert("Order finished!");
      } else {
        alert(res.message);
      }
    }
  };

  const calculateTotal = () => {
    return cart.reduce((acc, product) => acc + product.price, 0).toFixed(2);
  };

  return (
    <>
      {cart.length === 0 ? (
        <p className="text-secondary">Your cart is empty.</p>
      ) : (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          {cart.map((product) => (
            <div
              key={product.id}
              className="flex items-center justify-between border-b border-gray-300 p-4 last:border-b-0"
            >
              <div className="flex items-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={80}
                  height={80}
                  className="rounded-md mr-4"
                />
                <div>
                  <h3 className="text-subtitle text-primary">{product.name}</h3>
                  <p className="text-body text-secondary">
                    Price: ${product.price}
                  </p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(product.id.toString())}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="p-4 bg-gray-50">
            <div className="flex justify-between items-center mb-4">
              <span className="text-primary text-lg font-bold">Total:</span>
              <span className="text-secondary text-lg font-bold">
                ${calculateTotal()}
              </span>
            </div>
            <button onClick={handleCart} className="button-primary">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CartComponent;