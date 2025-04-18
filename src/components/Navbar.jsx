import React from 'react';

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <svg className="h-8 w-8 text-green-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 19V6c0-1.1.9-2 2-2h9v14c0 1.1-.9 2-2 2H9z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 10v8c0 1.1.9 2 2 2h3v-8H6c-1.1 0-2-.9-2-2zM9 6l6-3v14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="ml-2 text-xl font-bold text-gray-900">Museekly</span>
            </div>
          </div>
          <div className="flex items-center">
            <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
              <a href="#" className="text-gray-900 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">Accueil</a>
              <a href="#" className="text-gray-500 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">À propos</a>
              <a href="#" className="text-gray-500 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;