import React, { useState } from 'react';
import { Star, Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-amber-900/20">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2">
            <Star className="w-8 h-8 text-amber-400" fill="currentColor" />
            <span className="text-2xl font-serif text-white">AURELUX</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-white hover:text-amber-400 transition-colors">Inicio</a>
            <a href="#coleccion" className="text-white hover:text-amber-400 transition-colors">Colección</a>
            <a href="#contacto" className="text-white hover:text-amber-400 transition-colors">Contacto</a>

          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in">
            <a href="#inicio" className="block text-white hover:text-amber-400 transition-colors">Inicio</a>
            <a href="#coleccion" className="block text-white hover:text-amber-400 transition-colors">Colección</a>
            <a href="#contacto" className="block text-white hover:text-amber-400 transition-colors">Contacto</a>
            <button className="w-full bg-amber-600 hover:bg-amber-500 text-white px-6 py-2 rounded-full transition-all">
              Consultar
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;