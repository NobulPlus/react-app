import React from 'react';
import Product from './Product';

const Advert1 = () => {
  return (
    <>
      <div className="container p-4 mx-auto">
        <div className="bg-gray-200 advert-title p-[2px] border-t-4 border-purple-900">
          <div className="bg-white p-8 advert-title-text">
            <h3 className="text-purple-900 font-semibold">PRICE RANGE</h3>
          </div>
        </div>
      </div>

    <Product/>

    </>
  );
}

export default Advert1;
