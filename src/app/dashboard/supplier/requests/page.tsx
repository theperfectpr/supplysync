"use client";
import React, { useState, useEffect } from "react";

interface Request {
  id: number;
  company: string;
  product: string;
  units: number;
  budget: number;
  companyDetails: string;
  productDetails: string;
}

interface Notification {
  message: string;
  type: 'success' | 'error';
}

const RequestsPage = () => {
  const [requests, setRequests] = useState<Request[]>([
    { id: 1, company: "ABC Corp", product: "Perfume Bottles", units: 1000, budget: 5000, companyDetails: "Leading cosmetics manufacturer", productDetails: "50ml glass bottles with spray nozzle" },
    { id: 2, company: "XYZ Industries", product: "Cardboard Boxes", units: 5000, budget: 2500, companyDetails: "E-commerce packaging supplier", productDetails: "Medium-sized corrugated boxes" },
    { id: 3, company: "123 Beverages", product: "Aluminum Cans", units: 10000, budget: 3000, companyDetails: "Craft beer producer", productDetails: "330ml cans with custom printing" },
    { id: 4, company: "Green Foods", product: "Plastic Containers", units: 2000, budget: 1500, companyDetails: "Organic food distributor", productDetails: "500ml BPA-free containers with lids" },
    { id: 5, company: "Tech Gadgets", product: "Microchips", units: 500, budget: 10000, companyDetails: "Consumer electronics manufacturer", productDetails: "Latest generation processors" },
    { id: 6, company: "Fashion Forward", product: "Fabric Rolls", units: 100, budget: 7500, companyDetails: "Trendy clothing brand", productDetails: "Eco-friendly cotton blend, various colors" },
    { id: 7, company: "Home Essentials", product: "LED Bulbs", units: 3000, budget: 4500, companyDetails: "Home improvement chain", productDetails: "Energy-efficient 60W equivalent bulbs" },
  ]);

  const [selectedRequest, setSelectedRequest] = useState<Request | null>(null);
  const [notification, setNotification] = useState<Notification | null>(null);

  const handleAccept = (id: number) => {
    const acceptedRequest = requests.find(request => request.id === id);
    if (acceptedRequest) {
      setNotification({ message: `Accepted request from ${acceptedRequest.company}`, type: 'success' });
      setRequests(requests.filter(request => request.id !== id));
    }
  };

  const handleReject = (id: number) => {
    const rejectedRequest = requests.find(request => request.id === id);
    if (rejectedRequest) {
      setNotification({ message: `Rejected request from ${rejectedRequest.company}`, type: 'error' });
      setRequests(requests.filter(request => request.id !== id));
    }
  };

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  return (
    <div className="p-8 relative">
      <h1 className="text-2xl font-bold mb-6">Incoming Requests</h1>
      
      {notification && (
        <div className={`fixed top-4 right-4 p-4 rounded-md ${
          notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'
        } text-white`}>
          {notification.message}
        </div>
      )}

      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Company</th>
            <th className="py-3 px-6 text-left">Product Requested</th>
            <th className="py-3 px-6 text-left">Units Requested</th>
            <th className="py-3 px-6 text-left">Details</th>
            <th className="py-3 px-6 text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {requests.map((request) => (
            <tr key={request.id} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left whitespace-nowrap">{request.company}</td>
              <td className="py-3 px-6 text-left">{request.product}</td>
              <td className="py-3 px-6 text-left">{request.units}</td>
              <td className="py-3 px-6 text-left">
                <button
                  onClick={() => setSelectedRequest(request)}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                >
                  View Details
                </button>
              </td>
              <td className="py-3 px-6 text-center">
                <button
                  onClick={() => handleAccept(request.id)}
                  className="bg-green-500 text-white px-3 py-1 rounded mr-2 hover:bg-green-600"
                >
                  Accept
                </button>
                <button
                  onClick={() => handleReject(request.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedRequest && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Request Details</h2>
            <p><strong>Company:</strong> {selectedRequest.company}</p>
            <p><strong>Company Details:</strong> {selectedRequest.companyDetails}</p>
            <p><strong>Product:</strong> {selectedRequest.product}</p>
            <p><strong>Product Details:</strong> {selectedRequest.productDetails}</p>
            <p><strong>Units Requested:</strong> {selectedRequest.units}</p>
            <p><strong>Budget:</strong> ${selectedRequest.budget}</p>
            <button
              onClick={() => setSelectedRequest(null)}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RequestsPage;