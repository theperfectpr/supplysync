"use client";
import React, { useState } from "react";

interface Supplier {
  id: number;
  name: string;
  product: string;
  contractValue: number;
  contractDuration: string;
  performanceRating: number;
  lastDelivery: string;
  status: 'Active' | 'On Hold' | 'Pending Review';
}

const CurrentBusinessPage = () => {
  const [suppliers, setSuppliers] = useState<Supplier[]>([
    { id: 1, name: "TechComponents Ltd", product: "Microprocessors", contractValue: 500000, contractDuration: "1 year", performanceRating: 4.5, lastDelivery: "2023-06-01", status: 'Active' },
    { id: 2, name: "GreenEnergy Solutions", product: "Solar Panels", contractValue: 750000, contractDuration: "2 years", performanceRating: 4.2, lastDelivery: "2023-05-15", status: 'Active' },
    { id: 3, name: "AutoParts Inc", product: "Brake Systems", contractValue: 300000, contractDuration: "1 year", performanceRating: 3.8, lastDelivery: "2023-05-30", status: 'Pending Review' },
    { id: 4, name: "ChemCorp", product: "Industrial Lubricants", contractValue: 200000, contractDuration: "6 months", performanceRating: 4.0, lastDelivery: "2023-06-05", status: 'Active' },
    { id: 5, name: "MetalWorks Co", product: "Steel Alloys", contractValue: 1000000, contractDuration: "3 years", performanceRating: 4.7, lastDelivery: "2023-05-20", status: 'Active' },
    { id: 6, name: "PlastiTech", product: "Polymer Compounds", contractValue: 450000, contractDuration: "18 months", performanceRating: 3.5, lastDelivery: "2023-06-10", status: 'On Hold' },
    { id: 7, name: "ElectroSystems", product: "Circuit Boards", contractValue: 600000, contractDuration: "2 years", performanceRating: 4.3, lastDelivery: "2023-05-25", status: 'Active' },
    { id: 8, name: "PackagePro", product: "Packaging Materials", contractValue: 150000, contractDuration: "1 year", performanceRating: 3.9, lastDelivery: "2023-06-03", status: 'Active' },
  ]);

  const handleStatusChange = (id: number, newStatus: 'Active' | 'On Hold' | 'Pending Review') => {
    setSuppliers(suppliers.map(supplier => 
      supplier.id === id ? { ...supplier, status: newStatus } : supplier
    ));
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Current Business</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Supplier</th>
              <th className="py-3 px-6 text-left">Product</th>
              <th className="py-3 px-6 text-right">Contract Value</th>
              <th className="py-3 px-6 text-center">Contract Duration</th>
              <th className="py-3 px-6 text-center">Performance Rating</th>
              <th className="py-3 px-6 text-center">Last Delivery</th>
              <th className="py-3 px-6 text-center">Status</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {suppliers.map((supplier) => (
              <tr key={supplier.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">{supplier.name}</td>
                <td className="py-3 px-6 text-left">{supplier.product}</td>
                <td className="py-3 px-6 text-right">${supplier.contractValue.toLocaleString()}</td>
                <td className="py-3 px-6 text-center">{supplier.contractDuration}</td>
                <td className="py-3 px-6 text-center">{supplier.performanceRating.toFixed(1)}</td>
                <td className="py-3 px-6 text-center">{supplier.lastDelivery}</td>
                <td className="py-3 px-6 text-center">
                  <span className={`py-1 px-3 rounded-full text-xs ${
                    supplier.status === 'Active' ? 'bg-green-200 text-green-600' :
                    supplier.status === 'On Hold' ? 'bg-yellow-200 text-yellow-600' :
                    'bg-red-200 text-red-600'
                  }`}>
                    {supplier.status}
                  </span>
                </td>
                <td className="py-3 px-6 text-center">
                  <select 
                    value={supplier.status}
                    onChange={(e) => handleStatusChange(supplier.id, e.target.value as 'Active' | 'On Hold' | 'Pending Review')}
                    className="bg-white border rounded px-2 py-1"
                  >
                    <option value="Active">Set Active</option>
                    <option value="On Hold">Put On Hold</option>
                    <option value="Pending Review">Mark for Review</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CurrentBusinessPage;