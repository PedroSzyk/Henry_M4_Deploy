import { IProduct } from "@/interfaces/Types";
import productsToPreLoad from "./products";

const APIURL = process.env.NEXT_PUBLIC_API_URL;
const fallbackMockEnabled = Boolean(process.env.FALLBACK_MOCK)
  ? process.env.FALLBACK_MOCK
  : false;

export const getProductsDB = async (): Promise<IProduct[]> => {
  const res = await fetch(`${APIURL}/products`)
    .then((res) => res.json())
    .catch(() => {
      return fallbackMockEnabled ? productsToPreLoad : [];
    });
  return res as IProduct[];
};

export const getProductsById = async (id: string): Promise<IProduct> => {
  const products: IProduct[] = await getProductsDB();
  const productFiltered = products.find(
    (product) => product.id.toString() === id
  );
  if (!productFiltered) {
    throw new Error("Product not Found");
  }
  return productFiltered;
};

export const getFeturedProducts = async (): Promise<IProduct[]> => {
    const products = await getProductsDB();
    const res = products.slice(0, 3);
    return res;
  };