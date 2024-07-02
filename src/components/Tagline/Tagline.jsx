import React from 'react';

const Tagline = () => {
  return (
    <>
      <div className="container p-4 mx-auto">
        <nav className="text-gray-500">
          <ul className="flex space-x-2">
            <li className="after:content-['>'] after:mx-2">Home</li>
            <li className="after:content-['>'] after:mx-2">Active Products</li>
            <li className="after:content-['>'] after:mx-2">Adire Designs</li>
            <li className="text-purple-900">Adire Styles</li>
          </ul>
        </nav>
        <hr />
      </div>
    </>
  );
}

export default Tagline;
