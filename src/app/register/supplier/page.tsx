"use client";

import { useRouter } from 'next/navigation';
import Head from 'next/head';
import { useState, useEffect } from 'react';

export default function SupplierRegistration() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    companyName: '',
    yearEstablished: '',
    companyWebsite: '',
    primaryContactPerson: '',
    email: '',
    phone: '',
    industry: '',
    products: [{ name: '', capacity: '', minOrder: '', maxOrder: '', image: '' }],
    qualityControlProcess: '',
    certificationsHeld: '',
    complianceStandardsMet: '',
    manufacturingLocations: '',
    keyEquipmentTechnologies: '',
    inHouseProcesses: '',
    outsourcedProcesses: '',
    shippingMethodsOffered: '',
    regionsServed: '',
    averageDeliveryTimes: '',
    packagingCapabilities: '',
    environmentalPolicies: '',
    sustainablePractices: '',
    ethicalSourcingPolicies: '',
    documents: ''
  });

  useEffect(() => {
    // Function to add dummy data
    const addDummyData = () => {
      setFormData({
        companyName: 'Example Company',
        yearEstablished: '2000',
        companyWebsite: 'https://example.com',
        primaryContactPerson: 'John Doe',
        email: 'john.doe@example.com',
        phone: '+1234567890',
        industry: 'Manufacturing',
        products: [
          { name: 'Product 1', capacity: '1000 units', minOrder: '100 units', maxOrder: '500 units', image: 'file1.jpg' },
          { name: 'Product 2', capacity: '2000 units', minOrder: '200 units', maxOrder: '1000 units', image: 'file2.jpg' }
        ],
        qualityControlProcess: 'ISO 9001',
        certificationsHeld: 'ISO 14001',
        complianceStandardsMet: 'RoHS',
        manufacturingLocations: 'Location 1, Location 2',
        keyEquipmentTechnologies: 'Equipment 1, Equipment 2',
        inHouseProcesses: 'Process 1, Process 2',
        outsourcedProcesses: 'Process 3, Process 4',
        shippingMethodsOffered: 'Air, Sea',
        regionsServed: 'Region 1, Region 2',
        averageDeliveryTimes: '5-7 days',
        packagingCapabilities: 'Capability 1, Capability 2',
        environmentalPolicies: 'Policy 1, Policy 2',
        sustainablePractices: 'Practice 1, Practice 2',
        ethicalSourcingPolicies: 'Policy 3, Policy 4',
        documents: 'document.pdf'
      });
    };

    addDummyData();
  }, []);

  const handleAddProduct = () => {
    setFormData({
      ...formData,
      products: [...formData.products, { name: '', capacity: '', minOrder: '', maxOrder: '', image: '' }]
    });
  };

  const handleDeleteProduct = (index) => {
    setFormData({
      ...formData,
      products: formData.products.filter((_, i) => i !== index)
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle supplier registration logic here
    // Assuming registration is successful
    router.push('/dashboard/supplier');
  };

  return (
    <div className="min-h-screen bg-pattern flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-pattern">
      <Head>
        <title>SupplySync - Supplier Registration</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="sm:mx-auto sm:w-full sm:max-w-4xl">
      <h2 className="mt-6 text-center text-4xl font-bold text-gray-800">
          Register as a Supplier
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-4xl">
        <div className="bg-white py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Company Information */}
            <div className="bg-blue-100 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900">Company Information</h3>
              <div className="mt-4 grid grid-cols-1 gap-y-4 gap-x-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="company-name" className="block text-sm font-medium text-gray-700">Company Name</label>
                  <input id="company-name" name="company-name" type="text" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm" value={formData.companyName} />
                </div>
                <div>
                  <label htmlFor="year-established" className="block text-sm font-medium text-gray-700">Year Established</label>
                  <input id="year-established" name="year-established" type="text" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm" value={formData.yearEstablished} />
                </div>
                <div>
                  <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">Company Website</label>
                  <input id="company-website" name="company-website" type="url" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm" value={formData.companyWebsite} />
                </div>
                <div>
                  <label htmlFor="primary-contact" className="block text-sm font-medium text-gray-700">Primary Contact Person</label>
                  <input id="primary-contact" name="primary-contact" type="text" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm" value={formData.primaryContactPerson} />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input id="email" name="email" type="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm" value={formData.email} />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                  <input id="phone" name="phone" type="tel" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm" value={formData.phone} />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="industry" className="block text-sm font-medium text-gray-700">Industry/Sector Served</label>
                  <input id="industry" name="industry" type="text" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm" value={formData.industry} />
                </div>
              </div>
            </div>

            {/* Products */}
            <div className="bg-blue-100 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900">Products</h3>
              {formData.products.map((product, index) => (
                <div key={index} className="mt-4 grid grid-cols-1 gap-y-4 gap-x-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor={`product-name-${index}`} className="block text-sm font-medium text-gray-700">Product Name</label>
                    <input id={`product-name-${index}`} name={`product-name-${index}`} type="text" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm" value={product.name} />
                  </div>
                  <div>
                    <label htmlFor={`production-capacity-${index}`} className="block text-sm font-medium text-gray-700">Production Capacity</label>
                    <input id={`production-capacity-${index}`} name={`production-capacity-${index}`} type="text" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm" value={product.capacity} />
                  </div>
                  <div>
                    <label htmlFor={`min-order-${index}`} className="block text-sm font-medium text-gray-700">Minimum Order Quantity</label>
                    <input id={`min-order-${index}`} name={`min-order-${index}`} type="text" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm" value={product.minOrder} />
                  </div>
                  <div>
                    <label htmlFor={`max-order-${index}`} className="block text-sm font-medium text-gray-700">Max Order Quantity</label>
                    <input id={`max-order-${index}`} name={`max-order-${index}`} type="text" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm" value={product.maxOrder} />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor={`image-${index}`} className="block text-sm font-medium text-gray-700">Image</label>
                    <input id={`image-${index}`} name={`image-${index}`} type="file" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm" />
                  </div>
                  {formData.products.length > 1 && (
                    <div className="sm:col-span-2 flex justify-end">
                      <button type="button" onClick={() => handleDeleteProduct(index)} className="mt-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                        Delete Product
                      </button>
                    </div>
                  )}
                </div>
              ))}
              <button type="button" onClick={handleAddProduct} className="mt-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Add Product
              </button>
            </div>

            {/* Quality and Standards */}
            <div className="bg-blue-100 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900">Quality and Standards</h3>
              <div className="mt-4 grid grid-cols-1 gap-y-4 gap-x-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="quality-control" className="block text-sm font-medium text-gray-700">Quality Control Process</label>
                  <input id="quality-control" name="quality-control" type="text" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm" value={formData.qualityControlProcess} />
                </div>
                <div>
                  <label htmlFor="certifications" className="block text-sm font-medium text-gray-700">Certifications Held</label>
                  <input id="certifications" name="certifications" type="text" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm" value={formData.certificationsHeld} />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="compliance" className="block text-sm font-medium text-gray-700">Compliance Standards Met</label>
                  <input id="compliance" name="compliance" type="text" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm" value={formData.complianceStandardsMet} />
                </div>
              </div>
            </div>

            {/* Manufacturing Capabilities */}
            <div className="bg-blue-100 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900">Manufacturing Capabilities</h3>
              <div className="mt-4 grid grid-cols-1 gap-y-4 gap-x-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="locations" className="block text-sm font-medium text-gray-700">Manufacturing Locations</label>
                  <input id="locations" name="locations" type="text" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm" value={formData.manufacturingLocations} />
                </div>
                <div>
                  <label htmlFor="equipment" className="block text-sm font-medium text-gray-700">Key Equipment/Technologies</label>
                  <input id="equipment" name="equipment" type="text" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm" value={formData.keyEquipmentTechnologies} />
                </div>
                <div>
                  <label htmlFor="in-house" className="block text-sm font-medium text-gray-700">In-house Processes</label>
                  <input id="in-house" name="in-house" type="text" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm" value={formData.inHouseProcesses} />
                </div>
                <div>
                  <label htmlFor="outsourced" className="block text-sm font-medium text-gray-700">Outsourced Processes</label>
                  <input id="outsourced" name="outsourced" type="text" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm" value={formData.outsourcedProcesses} />
                </div>
              </div>
            </div>

            {/* Logistics and Delivery */}
            <div className="bg-blue-100 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900">Logistics and Delivery</h3>
              <div className="mt-4 grid grid-cols-1 gap-y-4 gap-x-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="shipping-methods" className="block text-sm font-medium text-gray-700">Shipping Methods Offered</label>
                  <input id="shipping-methods" name="shipping-methods" type="text" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm" value={formData.shippingMethodsOffered} />
                </div>
                <div>
                  <label htmlFor="regions-served" className="block text-sm font-medium text-gray-700">Regions Served</label>
                  <input id="regions-served" name="regions-served" type="text" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm" value={formData.regionsServed} />
                </div>
                <div>
                  <label htmlFor="delivery-times" className="block text-sm font-medium text-gray-700">Average Delivery Times</label>
                  <input id="delivery-times" name="delivery-times" type="text" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm" value={formData.averageDeliveryTimes} />
                </div>
                <div>
                  <label htmlFor="packaging" className="block text-sm font-medium text-gray-700">Packaging Capabilities</label>
                  <input id="packaging" name="packaging" type="text" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm" value={formData.packagingCapabilities} />
                </div>
              </div>
            </div>

            {/* Sustainability and Ethics */}
            <div className="bg-blue-100 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900">Sustainability and Ethics</h3>
              <div className="mt-4 grid grid-cols-1 gap-y-4 gap-x-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="environmental-policies" className="block text-sm font-medium text-gray-700">Environmental Policies</label>
                  <input id="environmental-policies" name="environmental-policies" type="text" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm" value={formData.environmentalPolicies} />
                </div>
                <div>
                  <label htmlFor="sustainable-practices" className="block text-sm font-medium text-gray-700">Sustainable Practices</label>
                  <input id="sustainable-practices" name="sustainable-practices" type="text" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm" value={formData.sustainablePractices} />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="ethical-sourcing" className="block text-sm font-medium text-gray-700">Ethical Sourcing Policies</label>
                  <input id="ethical-sourcing" name="ethical-sourcing" type="text" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm" value={formData.ethicalSourcingPolicies} />
                </div>
              </div>
            </div>

            {/* Documents */}
            <div className="bg-blue-100 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900">Documents</h3>
              <div className="mt-4">
                <label htmlFor="documents" className="block text-sm font-medium text-gray-700">Upload Audited Documents</label>
                <input id="documents" name="documents" type="file" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm" />
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-600">Don't have audited documents?</p>
                <p className="text-sm text-gray-600">We're here to help you get them.</p>
                <button
                  type="button"
                  onClick={() => window.open('https://anchanto.com/products/', '_blank')}
                  className="mt-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Request an Audit by Anchanto
                </button>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}