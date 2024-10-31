import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Map, Globe2, Users, Building2, Coins, Languages, Award } from 'lucide-react';
import { usePartnership } from '../context/PartnershipContext';
import { Country } from '../types/country';

export const CountryDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [country, setCountry] = useState<Country | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { addPartnership, partnerships } = usePartnership();

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await axios.get(`https://restcountries.com/v3.1/alpha/${id}`);
        setCountry(response.data[0]);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError('Failed to fetch country details');
        setLoading(false);
      }
    };

    fetchCountry();
  }, [id]);

  const handlePartnershipRequest = () => {
    if (!country) return;
    
    const success = Math.random() >= 0.5;
    if (success) {
      addPartnership(country);
      alert(`Partnership with ${country.name.common} established successfully!`);
    } else {
      alert(`${country.name.common} declined the partnership request.`);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (error || !country) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600">
        {error || 'Country not found'}
      </div>
    );
  }

  const isPartner = partnerships.some(partner => partner.cca3 === country.cca3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-96">
          <img
            src={country.flags.svg}
            alt={country.flags.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white text-center">
              {country.name.common}
            </h1>
          </div>
        </div>

        <div className="p-6 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InfoCard
              icon={<Globe2 />}
              title="Region"
              value={`${country.subregion}, ${country.region}`}
            />
            <InfoCard
              icon={<Building2 />}
              title="Capital"
              value={country.capital?.[0] || 'N/A'}
            />
            <InfoCard
              icon={<Users />}
              title="Population"
              value={country.population.toLocaleString()}
            />
            <InfoCard
              icon={<Languages />}
              title="Languages"
              value={Object.values(country.languages || {}).join(', ')}
            />
            <InfoCard
              icon={<Coins />}
              title="Currencies"
              value={Object.values(country.currencies || {})
                .map((currency) => `${currency.name} (${currency.symbol})`)
                .join(', ')}
            />
            <InfoCard
              icon={<Award />}
              title="Independent"
              value={country.independent ? 'Yes' : 'No'}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={country.maps.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              <Map className="mr-2 h-5 w-5" />
              View on Google Maps
            </a>
            {!isPartner && (
              <button
                onClick={handlePartnershipRequest}
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700"
              >
                Request Partnership
              </button>
            )}
          </div>

          {country.flags.alt && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-2">About the Flag</h2>
              <p className="text-gray-600">{country.flags.alt}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon, title, value }) => (
  <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
    <div className="text-indigo-600">{icon}</div>
    <div>
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <p className="mt-1 text-lg font-semibold text-gray-900">{value}</p>
    </div>
  </div>
);