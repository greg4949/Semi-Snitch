import React from 'react';

const Footer = () => {
  return (
    <footer className=" w-full bg-gray-800 px-4 py-3 ">
      <div className="container mx-auto flex items-center justify-between text-gray-300">
        <div>
          <p>&copy; {new Date().getFullYear()} Semi Snitch</p>
          <p>All rights reserved.</p>
        </div>
        <div>
          <p>Contact: info@semisnitch.com</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
