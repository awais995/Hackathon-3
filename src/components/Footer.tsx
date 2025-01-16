"use client";
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid Layout for Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">My Marketplace</h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Your one-stop destination for quality products and services. We are committed to providing the best shopping experience.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center space-x-2">
                <FaEnvelope className="w-5 h-5" />
                <span className="text-sm sm:text-base">support@mymarketplace.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhone className="w-5 h-5" />
                <span className="text-sm sm:text-base">+1 (123) 456-7890</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaMapMarkerAlt className="w-5 h-5" />
                <span className="text-sm sm:text-base">123 Market St, City, Country</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Subscribe to Our Newsletter</h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Get the latest updates, offers, and news delivered straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm sm:text-base"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 rounded-lg transition-colors text-sm sm:text-base"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Media Links and Copyright */}
        <div className="mt-8 sm:mt-12 border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between">
          {/* Social Media Links */}
          <div className="flex space-x-6 mb-4 sm:mb-0">
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaFacebook className="w-6 h-6" />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaTwitter className="w-6 h-6" />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaInstagram className="w-6 h-6" />
            </Link>
          </div>

          {/* Copyright Text */}
          <p className="text-gray-400 text-sm text-center sm:text-left">
            &copy; {new Date().getFullYear()} My Marketplace. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}