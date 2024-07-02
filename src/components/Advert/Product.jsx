import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';


import IMG1 from '../../assets/img1.png';
import IMG2 from '../../assets/img2.png';
import IMG3 from '../../assets/img3.png';
import IMG4 from '../../assets/img6.png';
import IMG5 from '../../assets/img5.png';

const products = [
  { id: 1, name: 'Adire Dress', img: IMG1 },
  { id: 2, name: 'Adire Shirt', img: IMG2 },
  { id: 3, name: 'Adire Skirt', img: IMG3 },
  { id: 4, name: 'Adire Scarf', img: IMG4 },
  { id: 5, name: 'Adire Bag', img: IMG5 },
];

const Product = () => {
  return (
    <div className="container p-4 mx-auto">
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-5">
        {products.map(product => (
          <div key={product.id} className="p-4 bg-gray-200 rounded shadow-md">
            <div className="p-2 mb-4 bg-white rounded">
              <img src={product.img} alt={product.name} className="object-cover w-full h-40 rounded" />
            </div>
            <div className="mb-2 text-lg font-bold text-gray-800">{product.name} (Product Content)</div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <label htmlFor={`quantity-${product.id}`} className="mr-2 text-gray-700">Qty:</label>
                <select id={`quantity-${product.id}`} className="px-5 py-3 w-[100px] border border-gray-400 rounded">
                  {[...Array(10).keys()].map(n => (
                    <option key={n + 1} value={n + 1}>{n + 1}</option>
                  ))}
                </select>
              </div>
              <button className="px-4 py-2 font-bold text-gray-600 bg-transparent border border-gray-400 rounded">
                <FontAwesomeIcon icon={faShoppingBag} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
