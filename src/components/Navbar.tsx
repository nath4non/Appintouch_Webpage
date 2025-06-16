'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">
          <span className="text-red-600">APP</span>INTOUCH
        </div>

        <nav className="hidden md:flex space-x-6 text-gray-700 items-center">
          <a href="#" className="hover:text-blue-600 transition">Features</a>
          <a href="#" className="hover:text-blue-600 transition">Pricing</a>
          <a href="#" className="hover:text-blue-600 transition">Blog</a>
          <a href="#" className="hover:text-blue-600 transition">Login</a>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition">
            In Touch!
          </button>
        </nav>

        <button className="md:hidden text-gray-700" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white px-4 py-2 space-y-2 border-t">
          <a href="#" className="block text-gray-700 hover:text-blue-600">Features</a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">Pricing</a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">Blog</a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">Login</a>
          <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition">
            In Touch!
          </button>
        </div>
      )}
    </header>
  );
}
