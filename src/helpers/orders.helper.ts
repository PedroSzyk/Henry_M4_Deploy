import { IProduct, IUser } from "@/interfaces/Types";

interface IBuyOrder {
  cart: IProduct[];
  user: IUser;
}

const APIURL = process.env.NEXT_PUBLIC_API_URL;

export const buyOrder = async ({ cart, user }: IBuyOrder) => {
  const data = {
    userId: user.user.id,
    products: cart.map((product) => product.id),
  };

  const res = await fetch(`${APIURL}/orders`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: user.token,
    },
    body: JSON.stringify(data),
  });

  const result = await res.json();
  return result;
};