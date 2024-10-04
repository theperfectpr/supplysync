"use client";
import React from 'react';
import DashboardGrid from '@/components/Dashboard/DashboardGrid/DashboardGrid';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line } from 'recharts';

const SupplierDashboard = () => {
  const gridItems = [
    { title: 'Total Products', value: 25 },
    { title: 'Pending Orders', value: 7 },
    { title: 'Active Auctions', value: 3 },
    { title: 'Revenue This Month', value: '$12,500' },
  ];

  const monthlyRevenue = [
    { name: 'Jan', revenue: 4000 },
    { name: 'Feb', revenue: 3000 },
    { name: 'Mar', revenue: 5000 },
    { name: 'Apr', revenue: 4500 },
    { name: 'May', revenue: 5500 },
    { name: 'Jun', revenue: 6000 },
  ];

  const topProducts = [
    { name: 'Product A', sales: 120 },
    { name: 'Product B', sales: 98 },
    { name: 'Product C', sales: 86 },
    { name: 'Product D', sales: 75 },
    { name: 'Product E', sales: 62 },
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Supplier Dashboard</h1>
      <DashboardGrid items={gridItems} />

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Monthly Revenue</h2>
          <LineChart width={500} height={300} data={monthlyRevenue}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="revenue" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Top Selling Products</h2>
          <BarChart width={500} height={300} data={topProducts}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sales" fill="#82ca9d" />
          </BarChart>
        </div>
      </div>

      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
        <ul className="space-y-2">
          <li>New order received for Product A - 2 hours ago</li>
          <li>Auction for Product B ended - 5 hours ago</li>
          <li>New request for quotation - 1 day ago</li>
          <li>Product C inventory low - 2 days ago</li>
        </ul>
      </div>
    </div>
  );
};

export default SupplierDashboard;