import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className="bg-purple-800">
      <div className="container flex items-center justify-between p-4 mx-auto">
        {/* nav1 */}
        <div className="flex items-center space-x-16">
          <div className="flex items-center text-white uppercase">
            <FontAwesomeIcon icon={faList} className="mr-2" />
            <span className="font-bold">Category</span>
          </div>
          <ul className="flex space-x-16"> 
            <li className="text-white uppercase cursor-pointer hover:underline">Home</li>
            <li className="text-white uppercase cursor-pointer hover:underline">Today's Deal</li>
            <li className="text-white uppercase cursor-pointer hover:underline">Contact Us</li>
            <li className="text-white uppercase cursor-pointer hover:underline">FAQ</li>
          </ul>
        </div>
        {/* nav2 */}
        <div className="px-4 py-2 bg-gray-200 rounded cursor-pointer hover:bg-gray-300">
          <span className="font-bold text-gray-700">BLOG</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
