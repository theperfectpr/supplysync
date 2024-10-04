"use client";
import React, { useState } from 'react';
import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  supplier: string;
}

const SupplierDashboard = () => {
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: "Widget A", description: "A high-quality widget", price: 19.99, image: "/dummy-product.jpg", supplier: "Acme Corp" },
    { id: 2, name: "Gadget B", description: "An innovative gadget", price: 29.99, image: "/dummy-product.jpg", supplier: "TechCo" },
    { id: 3, name: "Tool C", description: "A durable tool", price: 39.99, image: "/dummy-product.jpg", supplier: "BuildRight" },
  ]);

  const [showPopup, setShowPopup] = useState(false);
  const [newProduct, setNewProduct] = useState<Omit<Product, 'id'>>({
    name: '',
    description: '',
    price: 0,
    image: '/dummy-product.jpg',
    supplier: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewProduct(prev => ({ ...prev, [name]: name === 'price' ? parseFloat(value) : value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = products.length + 1;
    setProducts(prev => [...prev, { id, ...newProduct }]);
    setShowPopup(false);
    setNewProduct({ name: '', description: '', price: 0, image: '/dummy-product.jpg', supplier: '' });
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Products</h1>
        <button
          onClick={() => setShowPopup(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Product
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow">
            <div className="bg-gray-200 h-48 mb-4 rounded flex items-center justify-center">
              <span className="text-xl font-semibold text-gray-600">{product.name}</span>
            </div>
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <p className="font-bold mb-2">${product.price.toFixed(2)}</p>
            <p className="text-sm text-gray-500">Supplier: {product.supplier}</p>
          </div>
        ))}
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={newProduct.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Description</label>
                <textarea
                  name="description"
                  value={newProduct.description}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Price</label>
                <input
                  type="number"
                  name="price"
                  value={newProduct.price}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  step="0.01"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Supplier</label>
                <input
                  type="text"
                  name="supplier"
                  value={newProduct.supplier}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setShowPopup(false)}
                  className="bg-gray-300 text-black px-4 py-2 rounded mr-2 hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SupplierDashboard;