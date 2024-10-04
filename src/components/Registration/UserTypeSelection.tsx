import React from 'react';

type UserType = 'company' | 'supplier' | 'jobSeeker';

interface Props {
  onSelect: (type: UserType) => void;
}

const UserTypeSelection: React.FC<Props> = ({ onSelect }) => {
  return (
    <div className="flex flex-col space-y-4">
      <h2 className="text-xl font-semibold">Select User Type</h2>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => onSelect('company')}
      >
        Company
      </button>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded"
        onClick={() => onSelect('supplier')}
      >
        Supplier
      </button>
      <button
        className="bg-yellow-500 text-white px-4 py-2 rounded"
        onClick={() => onSelect('jobSeeker')}
      >
        Job Seeker
      </button>
    </div>
  );
};

export default UserTypeSelection;