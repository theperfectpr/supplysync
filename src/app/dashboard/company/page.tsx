"use client";
import React from 'react';
import DashboardGrid from '@/components/Dashboard/DashboardGrid/DashboardGrid';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';

const CompanyDashboard = () => {
  const gridItems = [
    { title: 'Active Suppliers', value: 15 },
    { title: 'Ongoing Auctions', value: 3 },
    { title: 'Pending Requests', value: 7 },
    { title: 'Total Orders', value: 124 },
  ];

  const monthlyOrders = [
    { name: 'Jan', orders: 65 },
    { name: 'Feb', orders: 59 },
    { name: 'Mar', orders: 80 },
    { name: 'Apr', orders: 81 },
    { name: 'May', orders: 56 },
    { name: 'Jun', orders: 55 },
  ];

  const supplierDistribution = [
    { name: 'Electronics', value: 400 },
    { name: 'Textiles', value: 300 },
    { name: 'Food', value: 200 },
    { name: 'Machinery', value: 100 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Company Dashboard</h1>
      <DashboardGrid items={gridItems} />

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Monthly Orders</h2>
          <BarChart width={500} height={300} data={monthlyOrders}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="orders" fill="#8884d8" />
          </BarChart>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Supplier Distribution</h2>
          <PieChart width={400} height={300}>
            <Pie
              data={supplierDistribution}
              cx={200}
              cy={150}
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {supplierDistribution.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default CompanyDashboard;