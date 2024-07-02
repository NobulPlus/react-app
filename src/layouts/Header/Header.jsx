import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCaretDown, faCheck, faSearch, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <>
      <div>
        {/* Top Header */}
        <div className="bg-purple-800 header">
          <div className="container flex items-center justify-between p-4 mx-auto">
            <div className="flex items-center text-white">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> SHAKARAHUBS.com
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative flex items-center border-r-2 border-gray-200">
                <select
                  className="px-4 py-2 pr-8 leading-tight text-white bg-transparent rounded-none appearance-none focus:outline-none"
                  style={{ backgroundColor: '#68349c' }}
                >
                  <option value="NGN" className="text-black">NGN</option>
                  <option value="USD" className="text-black">USD</option>
                  <option value="EUR" className="text-black">EUR</option>
                  <option value="GBP" className="text-black">GBP</option>
                </select>
                <FontAwesomeIcon
                  icon={faCaretDown}
                  className="absolute text-white transform -translate-y-1/2 pointer-events-none right-2 top-1/2"
                  style={{ backgroundColor: '#68349c', padding: '8px' }}
                />
              </div>
              <div className="relative flex items-center border-r-2 border-gray-200">
                <select
                  className="px-4 py-2 pr-8 leading-tight text-white bg-transparent rounded-none appearance-none focus:outline-none"
                  style={{ backgroundColor: '#68349c' }}
                >
                  <option value="en" className="text-black">English</option>
                  <option value="fr" className="text-black">French</option>
                  <option value="es" className="text-black">Spanish</option>
                  <option value="de" className="text-black">German</option>
                </select>
                <FontAwesomeIcon
                  icon={faCaretDown}
                  className="absolute text-white transform -translate-y-1/2 pointer-events-none right-2 top-1/2"
                  style={{ backgroundColor: '#68349c', padding: '8px' }}
                />
              </div>
              <div className="flex items-center text-white">
                <FontAwesomeIcon icon={faCheck} className="mr-2 text-green-500" />
                <span>Checkout</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="container flex items-center justify-between p-4 mx-auto">
          <div className="flex items-center">
            logo
          </div>
          <div className="flex items-center w-full max-w-2xl mx-auto border border-purple-800 rounded">
            <div className="relative flex items-center">
              <select
                className="px-4 py-2 pr-1 text-white bg-purple-800 rounded-l appearance-none focus:outline-none"
                style={{ borderColor: '#68349c' }}
              >
                <option value="all" className="text-black">All</option>
                <option value="electronics" className="text-black">Electronics</option>
                <option value="clothing" className="text-black">Clothing</option>
                <option value="books" className="text-black">Books</option>
              </select>
              <FontAwesomeIcon
                icon={faCaretDown}
                className="absolute text-white transform -translate-y-1/2 pointer-events-none right-2 top-1/2"
              />
            </div>
            <div className="relative flex items-center w-full">
              <input
                type="text"
                placeholder="Search for products, brands, and categories"
                className="w-full px-4 py-2 italic text-black border-l-0 rounded-r focus:outline-none"
                style={{ borderColor: '#68349c' }}
              />
              <FontAwesomeIcon
                icon={faSearch}
                className="absolute text-gray-400 transform -translate-y-1/2 pointer-events-none right-4 top-1/2"
              />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex items-center text-gray-700">
              <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
              <span>₦12,000.00</span>
            </div>
            <div className="flex items-center text-gray-700">
              <FontAwesomeIcon icon={faUser} className="mr-2" />
              <span>Login/Create Account</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
