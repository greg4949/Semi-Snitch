import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  const token = localStorage.getItem('id_token');
  const logout = () => {
    localStorage.removeItem('id_token');
    window.location.assign('/'); //refresh page
  };

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    { label: 'Log In', to: '/login' },
    { label: 'Sign Out', to: '#!' },
    { label: 'Upload Data', to: '/services' },
  ];

  const sortedMenuItems = [...menuItems].sort((a, b) => a.label.length - b.label.length);

  return (
    <header className="bg-gray-800">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/">
          <img src={logo} alt="Logo" style={{ height: '72px', width: 'auto' }} />
        </Link>
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none focus:text-white"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <svg
              className={`w-6 h-6 ${isMobileMenuOpen ? 'hidden' : 'block'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              className={`w-6 h-6 ${isMobileMenuOpen ? 'block' : 'hidden'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <ul
          className={`md:flex space-x-4 ${
            isMobileMenuOpen ? 'block text-center' : 'hidden'
          }`}
        >
          {sortedMenuItems.map((menuItem) => (
            <li key={menuItem.label}>
              <Link
                to={menuItem.to}
                className="text-gray-300 hover:text-white"
                onClick={toggleMobileMenu}
              >
                {menuItem.label}
              </Link>
            </li>
          ))}
      <nav className="container mx-auto px-4 py-6 flex items-center justify-between">
        <Link to="/" className="text-white text-lg font-bold">Semi Snitch</Link>
        <ul className="flex space-x-4">
          {token ? (
            <>
              <li><Link to="/" onClick={logout} className="text-gray-300 hover:text-white">Logout</Link></li>
            </>
          ) : (
            <>
              <li><Link to="/signup"  className="text-gray-300 hover:text-white">Signup</Link></li>
              <li><Link to="/login"  className="text-gray-300 hover:text-white">Log In</Link></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;