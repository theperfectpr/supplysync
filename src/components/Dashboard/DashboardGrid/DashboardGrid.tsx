import React from 'react';

interface GridItem {
  title: string;
  value: string | number;
}

interface DashboardGridProps {
  items: GridItem[];
}

const DashboardGrid: React.FC<DashboardGridProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item, index) => (
        <div key={index} className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
          <p className="text-2xl font-bold">{item.value}</p>
        </div>
      ))}
    </div>
  );
};

export default DashboardGrid;