import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* About Section */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Travel to Kashmir</h2>
            <p className="mb-4">
              Explore the beauty of Kashmir with our exclusive travel packages. Experience the serene landscapes, rich culture, and warm hospitality.
            </p>
            <img
              src="https://storage.googleapis.com/a1aa/image/LE2hDH8ONsojIpEsY4d4RKwGEKPXQKgCceoNiRmwj7iNpFAKA.jpg"
              alt="Travel to Kashmir logo with scenic mountain and lake background"
              width="200"
              height="100"
              className="mb-4"
            />
          </div>
          {/* Quick Links Section */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:underline">Home</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">About Us</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">Packages</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">Contact</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">Blog</a>
              </li>
            </ul>
          </div>
          {/* Contact Us Section */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <p className="mb-2">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
              123 Kashmir Road, Srinagar, India
            </p>
            <p className="mb-2">
              <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
              +91 12345 67890
            </p>
            <p className="mb-2">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              info@traveltokashmir.com
            </p>
          </div>
          {/* Follow Us Section */}
          <div className="w-full md:w-1/4">
            <h2 className="text-xl font-bold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-400">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>
        </div>
        {/* Footer Bottom Section */}
        <div className="mt-10 text-center">
          <p>© {new Date().getFullYear()} Travel to Kashmir. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

