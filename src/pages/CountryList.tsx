import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Country } from '../types/country';
import { CountryCard } from '../components/CountryCard';
import { Search } from 'lucide-react';

export const CountryList: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // const sortingCountries = (a: Country, b: Country) :number => {
  //   a.name.common.toLowerCase();
  //   b.name.common.toLowerCase();
  //
  //   if (a < b) return -1;
  //   if (a > b) return 1;
  //
  //   return 0;
  // }

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        setCountries(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError('Failed to fetch countries');
        setLoading(false);
      }
    };

    // setCountries([...data].sort(sortingCountries))
    fetchCountries();
  }, []);

  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600">
        {error}
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">

        {/* Search */}
        <div className="relative w-full max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"/>
          <input
              type="text"
              placeholder="Search countries..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-indigo-500 focus:border-transparent
               sm:text-sm md:text-base lg:text-lg"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
          />
        </div>
      </div>

      {/* Country Card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredCountries.map((country) => (
            <CountryCard
                key={country.cca3}
                name={country.name.common}
                flagUrl={country.flags.png}
                flagAlt={country.flags.alt}
                cca3={country.cca3}
            />
        ))}
      </div>
    </div>
  );
};