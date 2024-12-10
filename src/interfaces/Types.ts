// PRODUCTS

export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string;
  categoryId: number;
}

export interface ICategory {
  name: string;
  id: number;
}

// AUTH

export interface ILoginProps {
  email: string;
  password: string;
}

export interface ILoginErrors {
  email?: string;
  password?: string;
}

export interface IRegisterProps {
  name: string;
  email: string;
  password: string;
  address: string;
  phone: string;
}

export interface IRegisterErrors {
  name?: string;
  email?: string;
  password?: string;
  address?: string;
  phone?: string;
}

// USERS

export interface IUser {
  login: boolean;
  user: IUserData;
  token: string;
}

export interface IUserData {
  id: number;
  name: string;
  email: string;
  address: string;
  phone: string;
  role: string;
  credential: Credential;
  orders: IOrder[];
}

export interface ICredential {
  id: number;
  password: string;
}

export interface IOrder {
  id: number;
  status: string;
  date: string;
}
