import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header id="header" className="header flex justify-between py-4 px-2 mx-auto max-w-screen-xl  text-slate-800">
      <Link to={"/"}>
        <img src="https://fakestoreapi.com/icons/logo.png" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
      </Link>
      <Navbar />
    </header>
  );
}

export default Header;
