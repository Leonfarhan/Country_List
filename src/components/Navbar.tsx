import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Globe2, Handshake } from 'lucide-react';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex justify-around space-x-8">
            <Link
                to="/"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    isActive('/')
                        ? 'border-indigo-500 text-gray-900'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`}
            >
              <Globe2 className="h-5 w-5 mr-2"/>
              Countries
            </Link>

            <Link
                to="/partnerships"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    isActive('/partnerships')
                        ? 'border-indigo-500 text-gray-900'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`}
            >
              <Handshake className="h-5 w-5 mr-2"/>
              Partnerships
            </Link>
          </div>
          <div className="inline-flex justify-end items-center ">
            <a href="https://grosir.one/">
              <img src="/logo-lanscape.png" alt="logo lanscape" className="h-9 hidden sm:block "/>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};