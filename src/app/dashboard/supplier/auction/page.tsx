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
  status: 'Upcoming' | 'Ongoing' | 'Joined';
}

const AuctionPage = () => {
  const [auctions, setAuctions] = useState<Auction[]>([
    { id: 1, company: "TechCorp", product: "Microprocessors", startTime: "2023-06-15 10:00", endTime: "2023-06-15 18:00", startingBid: 10000, currentBid: 10000, participants: 5, status: 'Upcoming' },
    { id: 2, company: "AutoMakers", product: "Car Batteries", startTime: "2023-06-16 09:00", endTime: "2023-06-16 17:00", startingBid: 5000, currentBid: 5000, participants: 3, status: 'Upcoming' },
    { id: 3, company: "FashionHub", product: "Denim Fabric", startTime: "2023-06-17 11:00", endTime: "2023-06-17 19:00", startingBid: 2000, currentBid: 2000, participants: 7, status: 'Upcoming' },
    { id: 4, company: "GreenEnergy", product: "Solar Panels", startTime: "2023-06-18 10:30", endTime: "2023-06-18 18:30", startingBid: 15000, currentBid: 15000, participants: 2, status: 'Upcoming' },
    { id: 5, company: "FoodCo", product: "Industrial Mixers", startTime: "2023-06-19 08:00", endTime: "2023-06-19 16:00", startingBid: 8000, currentBid: 8000, participants: 4, status: 'Upcoming' },
    { id: 6, company: "BuildRight", product: "Steel Beams", startTime: "2023-06-20 09:30", endTime: "2023-06-20 17:30", startingBid: 12000, currentBid: 12000, participants: 6, status: 'Upcoming' },
    { id: 7, company: "MediTech", product: "MRI Machines", startTime: "2023-06-21 11:30", endTime: "2023-06-21 19:30", startingBid: 100000, currentBid: 100000, participants: 1, status: 'Upcoming' },
  ]);

  const handleJoin = (id: number) => {
    setAuctions(auctions.map(auction => 
      auction.id === id ? { ...auction, status: 'Joined', participants: auction.participants + 1 } : auction
    ));
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Upcoming Auctions</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {auctions.map((auction) => (
          <div key={auction.id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{auction.product}</h2>
            <p className="text-gray-600 mb-2">Hosted by: {auction.company}</p>
            <p className="text-sm text-gray-500 mb-2">Start: {auction.startTime}</p>
            <p className="text-sm text-gray-500 mb-2">End: {auction.endTime}</p>
            <p className="font-bold mb-2">Starting Bid: ${auction.startingBid.toLocaleString()}</p>
            <p className="text-sm text-gray-500 mb-2">Current Participants: {auction.participants}</p>
            <div className="mt-4">
              {auction.status === 'Joined' ? (
                <span className="bg-green-500 text-white px-4 py-2 rounded">Joined</span>
              ) : (
                <button
                  onClick={() => handleJoin(auction.id)}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Join Auction
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AuctionPage;