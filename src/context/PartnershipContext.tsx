import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Country } from '../types/country';

interface PartnershipContextType {
  partnerships: Country[];
  addPartnership: (country: Country) => void;
  removePartnership: (countryCode: string) => void;
}

const PartnershipContext = createContext<PartnershipContextType | undefined>(undefined);

export const PartnershipProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [partnerships, setPartnerships] = useState<Country[]>([]);

  const addPartnership = (country: Country) => {
    if (!partnerships.some(p => p.cca3 === country.cca3)) {
      setPartnerships([...partnerships, country]);
    }
  };

  const removePartnership = (countryCode: string) => {
    setPartnerships(partnerships.filter(p => p.cca3 !== countryCode));
  };

  return (
    <PartnershipContext.Provider value={{ partnerships, addPartnership, removePartnership }}>
      {children}
    </PartnershipContext.Provider>
  );
};

export const usePartnership = () => {
  const context = useContext(PartnershipContext);
  if (context === undefined) {
    throw new Error('usePartnership must be used within a PartnershipProvider');
  }
  return context;
};

export default PartnershipProvider;