'use client'

import Link from 'next/link'
import { useState, useContext, useEffect, useRef } from 'react'
import { UserContext } from "@/contexts/UserContext"
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logoutUser } = useContext(UserContext);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleLogout = () => {
    logoutUser();
    router.push("/");
    setIsMenuOpen(false);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <p className="text-title font-bold text-primary">Vintage Apple</p>
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="text-body text-link hover:text-link-hover transition-colors duration-200">Home</Link>
          <Link href="/products" className="text-body text-link hover:text-link-hover transition-colors duration-200">Products</Link>
          <Link href="/about" className="text-body text-link hover:text-link-hover transition-colors duration-200">About</Link>
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          {user ? (
            <>
              <Link href="/dashboard" className="p-2 border-2 border-gray-300 rounded-md hover:bg-gray-100 transition-colors duration-200">
                <span className="sr-only">My Account</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </Link>
              <Link href="/cart" className="p-2 border-2 border-gray-300 rounded-md hover:bg-gray-100 transition-colors duration-200">
                <span className="sr-only">Cart</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
              </Link>
              <button
                onClick={handleLogout}
                className="p-2 border-2 border-gray-300 rounded-md hover:bg-gray-100 transition-colors duration-200"
              >
                <span className="sr-only">Logout</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
                </svg>
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="text-body text-link hover:text-link-hover transition-colors duration-200">Sign in</Link>
              <Link href="/register" className="text-body text-link hover:text-link-hover transition-colors duration-200">Sign up</Link>
            </>
          )}
        </div>
        <button 
          className="md:hidden p-2 border-2 border-gray-300 rounded-md hover:bg-gray-100 transition-colors duration-200"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div ref={menuRef} className="md:hidden">
          <nav className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" onClick={closeMenu}>Home</Link>
            <Link href="/products" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" onClick={closeMenu}>Products</Link>
            <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" onClick={closeMenu}>About</Link>
            {user ? (
              <>
                <Link href="/dashboard" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" onClick={closeMenu}>My Account</Link>
                <Link href="/cart" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" onClick={closeMenu}>Cart</Link>
                <button onClick={handleLogout} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Logout</button>
              </>
            ) : (
              <>
                <Link href="/login" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" onClick={closeMenu}>Sign in</Link>
                <Link href="/register" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" onClick={closeMenu}>Sign up</Link>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}