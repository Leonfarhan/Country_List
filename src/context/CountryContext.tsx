import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Country } from '../types/country';

interface CountryState {
  partnerships: Country[];
}

type CountryAction =
  | { type: 'ADD_PARTNERSHIP'; payload: Country }
  | { type: 'REMOVE_PARTNERSHIP'; payload: string };

const CountryContext = createContext<{
  state: CountryState;
  dispatch: React.Dispatch<CountryAction>;
} | undefined>(undefined);

const countryReducer = (state: CountryState, action: CountryAction): CountryState => {
  switch (action.type) {
    case 'ADD_PARTNERSHIP':
      if (state.partnerships.some(country => country.cca3 === action.payload.cca3)) {
        return state;
      }
      return {
        ...state,
        partnerships: [...state.partnerships, action.payload],
      };
    case 'REMOVE_PARTNERSHIP':
      return {
        ...state,
        partnerships: state.partnerships.filter(
          country => country.cca3 !== action.payload
        ),
      };
    default:
      return state;
  }
};

export const CountryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(countryReducer, { partnerships: [] });

  return (
    <CountryContext.Provider value={{ state, dispatch }}>
      {children}
    </CountryContext.Provider>
  );
};

export const useCountryContext = () => {
  const context = useContext(CountryContext);
  if (!context) {
    throw new Error('useCountryContext must be used within a CountryProvider');
  }
  return context;
};