import CartComponent from "@/components/CartComponent/CartComponent";

const CartView = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-gray-100 py-4 px-6 border-b text-center">
          <h2 className="text-title">Your Cart</h2>
        </div>
        <CartComponent />
      </div>
    </div>
  );
};

export default CartView;
