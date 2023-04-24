import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <header className="bg-white h-20 flex items-center justify-center sticky top-0 border-b border-slate-300">
      <Link to="/">
        <h1 className="text-2xl font-black hover:text-blue-500">
          Cap'n Hook's Blog
        </h1>
      </Link>
    </header>
  );
};

export default Nav;
