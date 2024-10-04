"use client";
import React, { useState } from "react";

interface SupplierRequest {
  id: number;
  supplierName: string;
  product: string;
  quantity: number;
  price: number;
  deliveryTime: string;
  documents: string[];
  status: 'Pending' | 'Accepted' | 'Rejected';
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        {content}
        <button
          onClick={onClose}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
        >
          Close
        </button>
      </div>
    </div>
  );
};

const RequestPage = () => {
  const [requests, setRequests] = useState<SupplierRequest[]>([
    { id: 1, supplierName: "TechComponents Ltd", product: "Microprocessors", quantity: 1000, price: 50000, deliveryTime: "4 weeks", documents: ["Product Spec", "Quality Cert"], status: 'Pending' },
    { id: 2, supplierName: "GreenEnergy Solutions", product: "Solar Panels", quantity: 500, price: 75000, deliveryTime: "6 weeks", documents: ["Technical Sheet", "Warranty Info"], status: 'Pending' },
    { id: 3, supplierName: "AutoParts Inc", product: "Brake Systems", quantity: 2000, price: 30000, deliveryTime: "3 weeks", documents: ["Safety Cert", "Performance Test"], status: 'Pending' },
    { id: 4, supplierName: "ChemCorp", product: "Industrial Lubricants", quantity: 5000, price: 20000, deliveryTime: "2 weeks", documents: ["MSDS", "Chemical Analysis"], status: 'Pending' },
    { id: 5, supplierName: "MetalWorks Co", product: "Steel Alloys", quantity: 10000, price: 100000, deliveryTime: "8 weeks", documents: ["Material Cert", "Stress Test Results"], status: 'Pending' },
  ]);

  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    title: string;
    content: React.ReactNode;
  }>({
    isOpen: false,
    title: "",
    content: null,
  });

  const handleStatusChange = (id: number, newStatus: 'Accepted' | 'Rejected') => {
    setRequests(requests.map(request => 
      request.id === id ? { ...request, status: newStatus } : request
    ));
  };

  const handleViewDocument = (document: string) => {
    setModalState({
      isOpen: true,
      title: `Document: ${document}`,
      content: (
        <div>
          <p>Preview</p>
          <p>Document name: {document}</p>
        </div>
      ),
    });
  };

  const handleContact = (supplierName: string) => {
    setModalState({
      isOpen: true,
      title: `Contact ${supplierName}`,
      content: (
        <div>
          <p>Contact information for {supplierName}:</p>
          <p>Email: supplier@example.com</p>
          <p>Phone: (123) 456-7890</p>
          <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Send Message
          </button>
        </div>
      ),
    });
  };

  const closeModal = () => {
    setModalState({ ...modalState, isOpen: false });
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Supplier Requests</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Supplier</th>
              <th className="py-3 px-6 text-left">Product</th>
              <th className="py-3 px-6 text-right">Quantity</th>
              <th className="py-3 px-6 text-right">Price</th>
              <th className="py-3 px-6 text-center">Delivery Time</th>
              <th className="py-3 px-6 text-center">Documents</th>
              <th className="py-3 px-6 text-center">Status</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {requests.map((request) => (
              <tr key={request.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">{request.supplierName}</td>
                <td className="py-3 px-6 text-left">{request.product}</td>
                <td className="py-3 px-6 text-right">{request.quantity}</td>
                <td className="py-3 px-6 text-right">${request.price.toLocaleString()}</td>
                <td className="py-3 px-6 text-center">{request.deliveryTime}</td>
                <td className="py-3 px-6 text-center">
                  {request.documents.map((doc, index) => (
                    <button
                      key={index}
                      onClick={() => handleViewDocument(doc)}
                      className="bg-blue-500 text-white px-2 py-1 rounded text-xs mr-1 mb-1"
                    >
                      {doc}
                    </button>
                  ))}
                </td>
                <td className="py-3 px-6 text-center">
                  <span className={`py-1 px-3 rounded-full text-xs ${
                    request.status === 'Pending' ? 'bg-yellow-200 text-yellow-600' :
                    request.status === 'Accepted' ? 'bg-green-200 text-green-600' :
                    'bg-red-200 text-red-600'
                  }`}>
                    {request.status}
                  </span>
                </td>
                <td className="py-3 px-6 text-center">
                  {request.status === 'Pending' && (
                    <>
                      <button
                        onClick={() => handleStatusChange(request.id, 'Accepted')}
                        className="bg-green-500 text-white px-2 py-1 rounded text-xs mr-1"
                      >
                        Accept
                      </button>
                      <button
                        onClick={() => handleStatusChange(request.id, 'Rejected')}
                        className="bg-red-500 text-white px-2 py-1 rounded text-xs mr-1"
                      >
                        Reject
                      </button>
                    </>
                  )}
                  <button
                    onClick={() => handleContact(request.supplierName)}
                    className="bg-gray-500 text-white px-2 py-1 rounded text-xs"
                  >
                    Contact
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        title={modalState.title}
        content={modalState.content}
      />
    </div>
  );
};

export default RequestPage;