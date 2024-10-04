"use client";
import React, { useState } from "react";

interface Order {
  id: number;
  product: string;
  quantity: number;
  company: string;
  sla: string;
  completionPercentage: number;
  status: 'In Progress' | 'Completed';
}

const OrdersPage = () => {
  const [orders, setOrders] = useState<Order[]>([
    { id: 1, product: "Perfume Bottles", quantity: 1000, company: "ABC Corp", sla: "2 weeks", completionPercentage: 25, status: 'In Progress' },
    { id: 2, product: "Cardboard Boxes", quantity: 5000, company: "XYZ Industries", sla: "1 week", completionPercentage: 75, status: 'In Progress' },
    { id: 3, product: "Aluminum Cans", quantity: 10000, company: "123 Beverages", sla: "3 weeks", completionPercentage: 50, status: 'In Progress' },
    { id: 4, product: "Plastic Containers", quantity: 2000, company: "Green Foods", sla: "10 days", completionPercentage: 90, status: 'In Progress' },
    { id: 5, product: "Microchips", quantity: 500, company: "Tech Gadgets", sla: "4 weeks", completionPercentage: 10, status: 'In Progress' },
  ]);

  const handleUpdateStatus = (id: number, newPercentage: number) => {
    setOrders(orders.map(order => 
      order.id === id ? { ...order, completionPercentage: newPercentage } : order
    ));
  };

  const handleComplete = (id: number) => {
    setOrders(orders.map(order => 
      order.id === id ? { ...order, status: 'Completed', completionPercentage: 100 } : order
    ));
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Orders</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Product</th>
            <th className="py-3 px-6 text-left">Quantity</th>
            <th className="py-3 px-6 text-left">Company</th>
            <th className="py-3 px-6 text-left">SLA</th>
            <th className="py-3 px-6 text-left">Completion %</th>
            <th className="py-3 px-6 text-center">Action</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {orders.map((order) => (
            <tr key={order.id} className={`border-b border-gray-200 hover:bg-gray-100 ${order.status === 'Completed' ? 'bg-green-100' : ''}`}>
              <td className="py-3 px-6 text-left whitespace-nowrap">{order.product}</td>
              <td className="py-3 px-6 text-left">{order.quantity}</td>
              <td className="py-3 px-6 text-left">{order.company}</td>
              <td className="py-3 px-6 text-left">{order.sla}</td>
              <td className="py-3 px-6 text-left">
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{width: `${order.completionPercentage}%`}}></div>
                </div>
                <span className="ml-2">{order.completionPercentage}%</span>
              </td>
              <td className="py-3 px-6 text-center">
                {order.status === 'In Progress' ? (
                  <>
                    <input 
                      type="number" 
                      min="0" 
                      max="100" 
                      value={order.completionPercentage} 
                      onChange={(e) => handleUpdateStatus(order.id, Number(e.target.value))}
                      className="w-16 px-2 py-1 border rounded mr-2"
                    />
                    <button
                      onClick={() => handleComplete(order.id)}
                      className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                    >
                      Complete
                    </button>
                  </>
                ) : (
                  <span className="text-green-500 font-semibold">Completed</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;