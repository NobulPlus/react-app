import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Newsletter = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement your subscription logic, e.g., send data to server, etc.
    console.log(`Subscribing ${name} with email ${email}`);
    // Clear fields after submission
    setName('');
    setEmail('');
  };

  return (
    <div className='bg-purple-900'>
    <div className="container px-[50px] mx-auto">
      <form onSubmit={handleSubmit} className="flex items-center rounded p-4">
        <h2 className="text-lg text-white font-semibold w-[20%] mr-4">Subscribe to Our Newsletter</h2>
        <div className="flex-1 mr-4">
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            className="w-full px-3 py-2 border rounded mt-1"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="flex-1 mr-4">
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className="w-full px-3 py-2 border rounded mt-1"
            placeholder="Enter your email"
            required
          />
        </div>
        <button type="submit" className="bg-transparent border border-gray-400 text-white py-2 px-4 rounded hover:bg-purple-700 flex items-center">
          <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
          SUBSCRIBE
        </button>
      </form>
    </div>
    </div>
  );
}

export default Newsletter;
