import CartComponent from "@/components/CartComponent/CartComponent";

const CartView = () => {


  return (
    <div className="container mx-auto px-4 pt-spacing">
      <h2 className="text-title text-primary mb-spacing">Your Cart</h2>
      <CartComponent/>
      </div>
  );
};

export default CartView;