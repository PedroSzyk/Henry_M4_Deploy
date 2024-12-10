'use client'

import { useContext } from 'react';
import { UserContext } from "@/contexts/UserContext";
import { notFound } from "next/navigation";

const UserInfo = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    notFound();
  }

  const { name, email, orders } = user.user;

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-4 border-b border-gray-300">
        <h2 className="text-subtitle text-primary">{name}</h2>
        <p className="text-body text-secondary">{email}</p>
      </div>
      <div className="p-4">
        <h3 className="text-subtitle text-primary mb-4">Orders</h3>
        {orders.length === 0 ? (
          <p className="text-secondary">No orders yet.</p>
        ) : (
          orders.map((order) => (
            <div key={order.id} className="mb-4 last:mb-0 p-4 bg-gray-50 rounded-md">
              <p className="text-body text-primary">Order ID: {order.id}</p>
              <p className="text-body text-secondary">Date: {order.date}</p>
              <p className="text-body text-secondary">Status: {order.status}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default UserInfo;