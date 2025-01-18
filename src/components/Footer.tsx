"use client";
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Your main content goes here */}
      </main>
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-8 sm:py-12 mt-auto">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          {/* Newsletter Section (Above Other Sections) */}
          <div className="bg-blue-600 p-6 sm:p-8 rounded-lg mb-8 sm:mb-12">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Subscribe to Our Newsletter</h3>
              <p className="text-gray-200 text-sm sm:text-base mb-6">
                Get the latest updates, offers, and news delivered straight to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 w-full">
                <input
                  type="email"
                  placeholder="Enter your email..."
                  className="w-full sm:flex-1 px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white text-sm sm:text-base"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg transition-colors text-sm sm:text-base font-semibold"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Grid Layout for Other Sections */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* About Section */}
            <div className="space-y-4 text-center sm:text-left">
              <h3 className="text-xl font-bold">Smart Scale Marketplace</h3>
              <p className="text-gray-400 text-sm sm:text-base">
                Your one-stop destination for quality products and services. We are committed to providing the best shopping experience.
              </p>
            </div>

            {/* Quick Links Section */}
            <div className="space-y-4 text-center sm:text-left">
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
            <div className="space-y-4 text-center sm:text-left">
              <h3 className="text-xl font-bold">Contact Us</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center justify-center sm:justify-start space-x-2">
                  <FaEnvelope className="w-5 h-5" aria-label="Email" />
                  <span className="text-sm sm:text-base">support@smartscale.com</span>
                </li>
                <li className="flex items-center justify-center sm:justify-start space-x-2">
                  <FaPhone className="w-5 h-5" aria-label="Phone" />
                  <span className="text-sm sm:text-base">+1 (123) 456-7890</span>
                </li>
                <li className="flex items-center justify-center sm:justify-start space-x-2">
                  <FaMapMarkerAlt className="w-5 h-5" aria-label="Address" />
                  <span className="text-sm sm:text-base">123 Market St, City, Country</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Media Links and Copyright */}
          <div className="mt-8 sm:mt-12 border-t border-gray-700 pt-8 flex flex-col sm:flex-row items-center justify-between">
            {/* Social Media Links */}
            <div className="flex space-x-6 mb-4 sm:mb-0">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Visit our Facebook page"
              >
                <FaFacebook className="w-6 h-6" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Visit our Twitter page"
              >
                <FaTwitter className="w-6 h-6" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Visit our Instagram page"
              >
                <FaInstagram className="w-6 h-6" />
              </Link>
            </div>

            {/* Copyright Text */}
            <p className="text-gray-400 text-sm text-center sm:text-left">
              &copy; {new Date().getFullYear()} Smar Scale Marketplace. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}