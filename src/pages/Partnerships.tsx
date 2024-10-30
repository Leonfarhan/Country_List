import React from 'react';
import { usePartnership } from '../context/PartnershipContext';
import { PartnershipCard } from '../components/PartnershipCard';

export const Partnerships: React.FC = () => {
  const { partnerships } = usePartnership();

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            International Partnerships
          </h1>
          <p className="mt-3 text-xl text-gray-500">
            {partnerships.length === 0
              ? 'No active partnerships yet. Visit countries to establish new partnerships!'
              : `Managing ${partnerships.length} international partnership${
                  partnerships.length === 1 ? '' : 's'
                }`}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {partnerships.map((country) => (
            <PartnershipCard key={country.cca3} country={country} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partnerships;