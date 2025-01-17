"use client";
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

// Navigation links configuration
const navLinks = [
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0); // Dynamic cart count
  const [isLoggedIn, setIsLoggedIn] = useState(false); // User authentication status
  const [searchQuery, setSearchQuery] = useState(''); // Search query
  const menuRef = useRef<HTMLDivElement>(null); // Ref for the menu
  const buttonRef = useRef<HTMLButtonElement>(null); // Ref for the hamburger button

  // Fetch cart count and user authentication status on component mount
  useEffect(() => {
    // Simulate fetching cart count from an API
    const fetchCartCount = async () => {
      const response = await fetch('/api/cart/count');
      const data = await response.json();
      setCartCount(data.count);
    };

    // Simulate checking user authentication status
    const checkAuthStatus = async () => {
      const response = await fetch('/api/auth/status');
      const data = await response.json();
      setIsLoggedIn(data.isLoggedIn);
    };

    fetchCartCount();
    checkAuthStatus();
  }, []);

  // Toggle menu open/close
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current?.contains(event.target as Node) // Ensure the button click is not intercepted
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle search form submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `/products?search=${encodeURIComponent(searchQuery)}`;
  };

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-white hover:text-blue-200 transition-colors flex items-center"
        >
          Smart Scales
        </Link>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white hover:text-blue-200 transition-colors font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Search Bar (Visible on Medium and Large Screens) */}
        <form
          onSubmit={handleSearch}
          className="hidden md:flex flex-grow mx-4 lg:mx-2 max-w-sm"
        >
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/10 text-white placeholder-white/70"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            type="submit"
            className="bg-white text-blue-600 px-4 py-2 rounded-r-lg hover:bg-blue-100 transition-colors"
          >
            Search
          </button>
        </form>

        {/* Right Side: Cart and User Links (Desktop) */}
        <div className="hidden lg:flex items-center space-x-4 lg:space-x-6">
          {/* Shopping Cart */}
          <Link
            href="/cart"
            className="relative text-white hover:text-blue-200 transition-colors"
            aria-label="Shopping Cart"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
              {cartCount} {/* Dynamic cart count */}
            </span>
          </Link>

          {/* User Authentication Links */}
          {isLoggedIn ? (
            <Link
              href="/profile"
              className="text-white hover:text-blue-200 transition-colors font-medium"
            >
              Profile
            </Link>
          ) : (
            <>
              <Link
                href="/login"
                className="text-white hover:text-blue-200 transition-colors font-medium"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors font-medium"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Hamburger Menu Button (Visible on Small and Medium Screens) */}
        <button
          ref={buttonRef}
          onClick={toggleMenu}
          className="lg:hidden text-white hover:text-blue-200 focus:outline-none"
          aria-label="Toggle menu"
        >
          {/* Hamburger Icon (changes to "X" when menu is open) */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              // "X" icon
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              // Hamburger icon
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Navigation Links (Mobile Menu) */}
      <nav
        ref={menuRef}
        className={`lg:hidden fixed bg-white shadow-lg top-16 right-0 w-full max-w-xs h-full transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          {/* Search Bar (Mobile) */}
          <form onSubmit={handleSearch} className="mb-6">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100 text-gray-700 placeholder-gray-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>

          {/* Navigation Links */}
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-gray-700 hover:text-blue-600 py-3 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)} // Close menu on link click
            >
              {link.label}
            </Link>
          ))}

          {/* User Authentication Links (Mobile) */}
          <div className="mt-6">
            {isLoggedIn ? (
              <Link
                href="/profile"
                className="block text-gray-700 hover:text-blue-600 py-3 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Profile
              </Link>
            ) : (
              <>
                <Link
                  href="/login"
                  className="block text-gray-700 hover:text-blue-600 py-3 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Shopping Cart (Mobile) */}
          <Link
            href="/cart"
            className="block text-gray-700 hover:text-blue-600 py-3 transition-colors font-medium"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Shopping Cart"
          >
            <div className="flex items-center">
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span>Cart ({cartCount})</span>
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
}