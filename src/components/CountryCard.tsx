import React from 'react';
import { Link } from 'react-router-dom';

interface CountryCardProps {
  name: string;
  flagUrl: string;
  flagAlt: string;
  cca3: string;
}

export const CountryCard: React.FC<CountryCardProps> = ({ name, flagUrl, flagAlt, cca3 }) => {
  return (
    <Link
      to={`/country/${cca3}`}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1"
    >
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={flagUrl}
          alt={flagAlt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{name}</h3>
      </div>
    </Link>
  );
};

export default CountryCard;