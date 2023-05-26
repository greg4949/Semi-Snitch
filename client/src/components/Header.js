import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () =>
{

  const handleLogout = () => {
    localStorage.removeItem('id_token');
    window.location.reload()
  };

  const loggedIn = localStorage.getItem('id_token');

  return (
    <header className="fixed w-full bg-gray-800">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/">
          <img src={logo} alt="Logo" style={{ height: '72px', width: 'auto' }} />
        </Link>
        <ul className="flex space-x-4">
          {loggedIn ? (
            <li>
              <button onClick={handleLogout} className="text-gray-300 hover:text-white">
                Logout
              </button>
            </li>
          ) : (
            <>
              <li>
                <Link to="/login" className="text-gray-300 hover:text-white">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/signup" className="text-gray-300 hover:text-white">
                  Signup
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;