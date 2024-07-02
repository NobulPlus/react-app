import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import IMG1 from '../../assets/img1.png';

const Product = () => {
    const [rating, setRating] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('details');
  
    const handleRating = (rate) => {
      setRating(rate);
    };
  
    const handleQuantityChange = (event) => {
      setQuantity(event.target.value);
    };
  
  return (
    <>
      <div className="container p-4 mx-auto">
        <div className="mb-4 text-2xl font-bold text-purple-900">ADIRE STYLES</div>
        <hr className="mb-4 border-t-4 border-purple-900" />
        <div className="flex items-center justify-between px-4 py-2 mx-auto bg-white rounded shadow-md">
          <p className="font-medium text-gray-700">PRODUCT</p>
          <p className="font-medium text-gray-700">TOTAL</p>
        </div>

        <div className="flex items-center justify-between p-4 mt-6">
          <div className="w-[30%] content-1 bg-gray-50">
            <img src={IMG1} alt="Adire Styles" className="w-full h-auto p-10 rounded" />
          </div>
          <div className="w-2/3 px-8 content-2">
            <div className="flex justify-between mb-2">
              <div className="text-lg font-bold text-gray-800 left">Adire Styles</div>
              <div className="text-lg text-purple-900 right">₦80,000.00</div>
            </div>
            <p className="pb-8 mb-2 text-gray-600">Brand: Adire</p>
            <div className="flex flex-col justify-between mb-2 space-y-4 text-gray-600">
            <div className="flex items-center">
                <p>Reviews: </p>
                <div className="flex ml-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FontAwesomeIcon
                      key={star}
                      icon={faStar}
                      className={`cursor-pointer ${star <= rating ? 'text-yellow-500' : 'text-gray-300'}`}
                      onClick={() => handleRating(star)}
                    />
                  ))}
                </div>
              </div>
              <div className="flex items-center">
                <p className="mr-2">Quantity:</p>
                <select
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="px-2 py-1 bg-white border border-gray-300 rounded"
                >
                  {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>
              <p>Price: ₦40,000.00</p>
            </div>
            <div className='py-4'>
              <button className="w-full px-4 py-2 font-bold text-white bg-purple-900 rounded hover:bg-purple-700">Checkout</button>
            </div>
          </div>
        </div>

        <div className="mt-6 product-details">
          <div className="flex mb-4 text-2xl font-semibold cursor-pointer product-head">
            <div 
              onClick={() => setActiveTab('details')} 
              className={`p-2 ${activeTab === 'details' ? 'border-b-2 border-purple-900 text-purple-900' : 'text-gray-600'}`}
            >
              Product Details
            </div>
            <div 
              onClick={() => setActiveTab('specifications')} 
              className={`p-2 ${activeTab === 'specifications' ? 'border-b-2 border-purple-900 text-purple-900' : 'text-gray-600'}`}
            >
              Specifications
            </div>
            <div 
              onClick={() => setActiveTab('comments')} 
              className={`p-2 ${activeTab === 'comments' ? 'border-b-2 border-purple-900 text-purple-900' : 'text-gray-600'}`}
            >
              Comments
            </div>
          </div>
          <div className="p-12 bg-gray-200 rounded shadow-md product-body">
            {activeTab === 'details' && <div className='w-[38%] font-bold'>Adire/Kampala Tye & Dye Bubu, women bubu, one size fits all, African Kaftan, Long African women bubu, Handmade with Aso Oke.</div>}
            {activeTab === 'specifications' && <div>Here are the specifications...</div>}
            {activeTab === 'comments' && <div>Here are the comments...</div>}
          </div>
        </div>

      </div>
    </>
  );
}

export default Product;
