"use client";
import React, { useState } from "react";

interface Auction {
  id: number;
  company: string;
  product: string;
  startTime: string;
  endTime: string;
  startingBid: number;
  currentBid: number;
  participants: number;
  location: string;
  status: 'Upcoming' | 'Ongoing' | 'Completed';
}

const CompanyAuctionPage = () => {
  const [auctions, setAuctions] = useState<Auction[]>([
    { id: 1, company: "TechCorp", product: "Microprocessors", startTime: "2023-06-15 10:00", endTime: "2023-06-15 18:00", startingBid: 10000, currentBid: 10000, participants: 5, location: "Online", status: 'Upcoming' },
    { id: 2, company: "TechCorp", product: "Car Batteries", startTime: "2023-06-16 09:00", endTime: "2023-06-16 17:00", startingBid: 5000, currentBid: 5000, participants: 3, location: "New York", status: 'Upcoming' },
    { id: 3, company: "TechCorp", product: "Denim Fabric", startTime: "2023-06-17 11:00", endTime: "2023-06-17 19:00", startingBid: 2000, currentBid: 2000, participants: 7, location: "Online", status: 'Upcoming' },
  ]);

  const [showPopup, setShowPopup] = useState(false);
  const [newAuction, setNewAuction] = useState<Omit<Auction, 'id' | 'currentBid' | 'participants'>>({
    company: "TechCorp",
    product: "",
    startTime: "",
    endTime: "",
    startingBid: 0,
    location: "",
    status: 'Upcoming'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewAuction(prev => ({ ...prev, [name]: name === 'startingBid' ? parseFloat(value) : value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = auctions.length + 1;
    setAuctions(prev => [...prev, { ...newAuction, id, currentBid: newAuction.startingBid, participants: 0 }]);
    setShowPopup(false);
    setNewAuction({
      company: "TechCorp",
      product: "",
      startTime: "",
      endTime: "",
      startingBid: 0,
      location: "",
      status: 'Upcoming'
    });
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Company Auctions</h1>
        <button
          onClick={() => setShowPopup(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Create Auction
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {auctions.map((auction) => (
          <div key={auction.id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{auction.product}</h2>
            <p className="text-gray-600 mb-2">Location: {auction.location}</p>
            <p className="text-sm text-gray-500 mb-2">Start: {auction.startTime}</p>
            <p className="text-sm text-gray-500 mb-2">End: {auction.endTime}</p>
            <p className="font-bold mb-2">Starting Bid: ${auction.startingBid.toLocaleString()}</p>
            <p className="text-sm text-gray-500 mb-2">Current Participants: {auction.participants}</p>
            <p className="text-sm font-semibold mb-2">Status: {auction.status}</p>
          </div>
        ))}
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Create New Auction</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block mb-2">Product</label>
                <input
                  type="text"
                  name="product"
                  value={newAuction.product}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Start Time</label>
                <input
                  type="datetime-local"
                  name="startTime"
                  value={newAuction.startTime}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">End Time</label>
                <input
                  type="datetime-local"
                  name="endTime"
                  value={newAuction.endTime}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Starting Bid</label>
                <input
                  type="number"
                  name="startingBid"
                  value={newAuction.startingBid}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  step="0.01"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Location</label>
                <input
                  type="text"
                  name="location"
                  value={newAuction.location}
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
                  Create Auction
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanyAuctionPage;