"use client"
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
  const menuRef = useRef<HTMLDivElement>(null); // Explicitly define the type of the ref
  const buttonRef = useRef<HTMLButtonElement>(null); // Ref for the hamburger button

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

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
          My Marketplace
        </Link>

        {/* Hamburger Menu Button */}
        <button
          ref={buttonRef} // Attach the ref to the button
          onClick={toggleMenu}
          className="lg:hidden text-gray-700 hover:text-blue-600 focus:outline-none"
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

        {/* Navigation Links */}
        <nav
          ref={menuRef}
          className={`lg:flex lg:items-center lg:gap-6 fixed lg:static lg:bg-transparent bg-white lg:shadow-none shadow-lg lg:py-0 py-4 lg:px-0 px-6 top-16 right-0 w-full lg:w-auto transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block lg:inline-block text-gray-700 hover:text-blue-600 py-2 lg:py-0 transition-colors"
              onClick={() => setIsMenuOpen(false)} // Close menu on link click
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}