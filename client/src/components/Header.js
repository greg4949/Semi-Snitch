import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const token = localStorage.getItem('id_token');
  const logout = () => {
    localStorage.removeItem('id_token');
    window.location.assign('/'); //refresh page
  };

  return (
    <header className="bg-gray-800">
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
}

export default Header;