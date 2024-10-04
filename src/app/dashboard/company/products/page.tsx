"use client";
import React, { useState } from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  supplier: string;
}

const CompanyProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: "Widget A", description: "A high-quality widget", price: 19.99, image: "/dummy-product.jpg", supplier: "Acme Corp" },
    { id: 2, name: "Gadget B", description: "An innovative gadget", price: 29.99, image: "/dummy-product.jpg", supplier: "TechCo" },
    { id: 3, name: "Tool C", description: "A durable tool", price: 39.99, image: "/dummy-product.jpg", supplier: "BuildRight" },
    { id: 4, name: "Component D", description: "A versatile component", price: 24.99, image: "/dummy-product.jpg", supplier: "PartsMaster" },
    { id: 5, name: "Material E", description: "High-grade material", price: 49.99, image: "/dummy-product.jpg", supplier: "ResourceInc" },
    { id: 6, name: "Device F", description: "Cutting-edge device", price: 59.99, image: "/dummy-product.jpg", supplier: "InnovateNow" },
  ]);

  const [showPopup, setShowPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handlePurchase = (product: Product) => {
    setSelectedProduct(product);
    setShowPopup(true);
  };

  const handleConfirmPurchase = () => {
    // Here you would typically send a request to your backend to process the purchase
    alert(`Purchase confirmed for ${selectedProduct?.name}`);
    setShowPopup(false);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Available Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow">
            <div className="bg-gray-200 h-48 mb-4 rounded flex items-center justify-center">
              <span className="text-xl font-semibold text-gray-600">{product.name}</span>
            </div>
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <p className="font-bold mb-2">${product.price.toFixed(2)}</p>
            <p className="text-sm text-gray-500 mb-4">Supplier: {product.supplier}</p>
            <button
              onClick={() => handlePurchase(product)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
            >
              Purchase
            </button>
          </div>
        ))}
      </div>

      {showPopup && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Confirm Purchase</h2>
            <p className="mb-4">Are you sure you want to purchase {selectedProduct.name} from {selectedProduct.supplier}?</p>
            <p className="font-bold mb-4">Price: ${selectedProduct.price.toFixed(2)}</p>
            <div className="flex justify-end">
              <button
                onClick={() => setShowPopup(false)}
                className="bg-gray-300 text-black px-4 py-2 rounded mr-2 hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmPurchase}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Contact Supplier
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanyProductsPage;