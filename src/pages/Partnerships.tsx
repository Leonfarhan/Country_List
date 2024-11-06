import React, {useState} from 'react';
import { usePartnership } from '../context/PartnershipContext';
import { PartnershipCard } from '../components/PartnershipCard';
import {Country} from "../types/country.ts";
import {Search} from "lucide-react";

export const Partnerships: React.FC = () => {
  const { partnerships } = usePartnership();

  const [partnership, setPartnership] = useState<Country[]>([]);
  const [searchTerm, setSearchTerm] = useState('');


  const filteredPartnership = partnership.filter(country =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

        <div className="relative w-full max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"/>
          <input
              type="text"
              placeholder="Search partnership..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-indigo-500 focus:border-transparent
               sm:text-sm md:text-base lg:text-lg"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {partnerships.map((country) => (
              <PartnershipCard key={country.cca3} country={country}/>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPartnership.map((country) => (
              <PartnershipCard key={country.cca3} country={country}/>
          ))}
        </div>
      </div>
    </div>
  );
};