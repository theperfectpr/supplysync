"use client";
import React from "react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Page = () => {
  const pathname = usePathname();
  const userType = 'company'; // Hardcoded for this example

  const menuItems = {
    company: [
      { label: 'Overview', href: '/dashboard/company' },
      { label: 'Companies', href: '/dashboard/company/Companies' },
      { label: 'Current Business', href: '/dashboard/company/current-business' },
      { label: 'Request', href: '/dashboard/company/request' },
      { label: 'Products', href: '/dashboard/company/products' },
      { label: 'Auction', href: '/dashboard/company/auction' },
      { label: 'Job Postings', href: '/dashboard/company/job-postings' },
      { label: 'Job Applications', href: '/dashboard/company/job-applications' },
    ],
  };

  const dummyCompanies = [
    { id: 1, name: "Company A", product: "Electronics", rating: 4.5 },
    { id: 2, name: "Company B", product: "Textiles", rating: 4.2 },
    { id: 3, name: "Company C", product: "Machinery", rating: 4.8 },
  ];

  return (
    <div className="flex">
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">Companies</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {dummyCompanies.map((supplier) => (
            <div key={supplier.id} className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold">{supplier.name}</h2>
              <p>Product: {supplier.product}</p>
              <p>Rating: {supplier.rating}/5</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Page;