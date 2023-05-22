import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="bg-gray-800">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/">
          <img src={logo} alt="Logo" style={{ height: '72px', width: 'auto', marginRight: '2in' }}/>
          <span className="sr-only">Semi Snitch</span> 
        </Link>
        <ul className="flex space-x-4">
          <li><Link to="/login"  className="text-gray-300 hover:text-white">Log In</Link></li>
          {/* <li><Link to="/s" className="text-gray-300 hover:text-white">Sign Up</Link></li> */}

          <li><Link to="#!" className="text-gray-300 hover:text-white">Sign Out</Link></li>
          <li><Link to="/services" className="text-gray-300 hover:text-white">Upload Data</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

