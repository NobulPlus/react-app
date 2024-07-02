import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-purple-800 text-white py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <p>Ikeja, Lagos</p>
            <p><a href="http://www.shakarahubs.com">SHAKARAHUBS.com</a></p>
            <p><a href="tel:+2349093853952">+234 909 385 3952</a></p>
            <p><a href="mailto:fax@company.com">fax@company.com</a></p>
          </div>

          {/* Extras */}
          <div>
            <h4 className="text-lg font-bold mb-4">Extras</h4>
            <ul>
              <li><a href="#" className="underline">Brands</a></li>
              <li><a href="#" className="underline">Gift Certificate</a></li>
              <li><a href="#" className="underline">Affiliate</a></li>
              <li><a href="#" className="underline">Specials</a></li>
              <li><a href="#" className="underline">Contact Us</a></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-lg font-bold mb-4">Information</h4>
            <ul>
              <li><a href="#" className="underline">About Us</a></li>
              <li><a href="#" className="underline">Delivery Information</a></li>
              <li><a href="#" className="underline">Privacy Policy</a></li>
              <li><a href="#" className="underline">Terms & Conditions</a></li>
              <li><a href="#" className="underline">Contact Us</a></li>
              <li><a href="#" className="underline">Site Map</a></li>
            </ul>
          </div>

          {/* My Account */}
          <div>
            <h4 className="text-lg font-bold mb-4">My Account</h4>
            <ul>
              <li><a href="#" className="underline">My Account</a></li>
              <li><a href="#" className="underline">Order History</a></li>
              <li><a href="#" className="underline">Wish List</a></li>
              <li><a href="#" className="underline">Newsletter</a></li>
            </ul>
          </div>

        <div>
        <h4 className="text-lg font-bold mb-4">Links</h4>
          <a href="#" className="text-white mx-2"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
          <a href="#" className="text-white mx-2"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
          <a href="#" className="text-white mx-2"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
          <a href="#" className="text-white mx-2"><FontAwesomeIcon icon={faYoutube} size="2x" /></a>
        </div>
      </div>
    </div>
    </footer>
  );
}

export default Footer;
