import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Handshake, X } from 'lucide-react';
import { usePartnership } from '../context/PartnershipContext';
import type { Country } from '../types/country';

interface PartnershipCardProps {
  country: Country;
}

export const PartnershipCard: React.FC<PartnershipCardProps> = ({ country }) => {
  const navigate = useNavigate();
  const { removePartnership } = usePartnership();

  const handleRemovePartnership = (event: React.MouseEvent) => {
    event.stopPropagation();
    if (window.confirm(`Are you sure you want to end the partnership with ${country.name.common}?`)) {
      removePartnership(country.cca3);
    }
  };

  return (
    <div
      onClick={() => navigate(`/country/${country.cca3}`)}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
    >
      <div className="relative h-48">
        <img
          src={country.flags.svg}
          alt={country.flags.alt || `Flag of ${country.name.common}`}
          className="w-full h-full object-cover"
        />
        <button
          onClick={handleRemovePartnership}
          className="absolute top-4 right-4 p-2 bg-red-500 hover:bg-red-600 text-white rounded-full transition-colors duration-300"
          title="End Partnership"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{country.name.common}</h3>
          <Handshake className="h-5 w-5 text-green-600" />
        </div>

        <div className="space-y-1 text-sm text-gray-600">
          <p>Region: {country.region}</p>
          <p>Capital: {country.capital?.[0] || 'N/A'}</p>
          <p>Population: {country.population.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};