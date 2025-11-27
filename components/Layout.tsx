import React, { useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap, Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Accueil', path: '/' },
  { label: 'À Propos', path: '/about' },
  { label: 'Formations & Services', path: '/services' },
  { label: 'Galerie', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
];

export const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800">
      {/* Top Bar */}
      <div className="bg-loko-blue text-white py-2 text-sm hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex space-x-6">
            <span className="flex items-center gap-2"><Phone size={14} /> +225 27 21 24 00 00</span>
            <span className="flex items-center gap-2"><Mail size={14} /> info@utt-loko.ci</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-loko-accent transition"><Facebook size={16} /></a>
            <a href="#" className="hover:text-loko-accent transition"><Linkedin size={16} /></a>
            <a href="#" className="hover:text-loko-accent transition"><Instagram size={16} /></a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <NavLink to="/" className="flex items-center gap-3" onClick={closeMenu}>
              <div className="w-12 h-12 bg-loko-blue rounded-full flex items-center justify-center text-white">
                <GraduationCap size={28} />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-loko-blue leading-tight">UTT-LOKO</span>
                <span className="text-xs text-gray-500 font-medium tracking-wide">GROUPE LOKO</span>
              </div>
            </NavLink>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-sm font-semibold uppercase tracking-wide transition-colors duration-300 border-b-2 ${
                      isActive
                        ? 'text-loko-blue border-loko-blue'
                        : 'text-gray-600 border-transparent hover:text-loko-blue hover:border-blue-200'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700 focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
            <nav className="flex flex-col p-4 space-y-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `text-base font-medium py-2 px-4 rounded-md transition-colors ${
                      isActive
                        ? 'bg-loko-blue text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About */}
            <div>
              <h3 className="text-white text-lg font-bold mb-4 border-b border-gray-700 pb-2">À Propos</h3>
              <p className="text-sm leading-relaxed mb-4">
                Le Groupe LOKO est une institution majeure de l'enseignement en Côte d'Ivoire, offrant des formations du secondaire au doctorat. Excellence, rigueur et professionnalisation sont nos maîtres-mots.
              </p>
              <div className="flex items-center gap-2 text-loko-blue font-bold">
                 <GraduationCap /> UTT-LOKO
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white text-lg font-bold mb-4 border-b border-gray-700 pb-2">Liens Rapides</h3>
              <ul className="space-y-2 text-sm">
                <li><NavLink to="/about" className="hover:text-white transition">Notre Histoire</NavLink></li>
                <li><NavLink to="/services" className="hover:text-white transition">Nos Formations LMD</NavLink></li>
                <li><NavLink to="/gallery" className="hover:text-white transition">Vie Estudiantine</NavLink></li>
                <li><NavLink to="/contact" className="hover:text-white transition">Admissions</NavLink></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white text-lg font-bold mb-4 border-b border-gray-700 pb-2">Contact</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="mt-1 flex-shrink-0 text-loko-blue" />
                  <span>Abidjan, Côte d'Ivoire<br/>Plusieurs campus à travers la ville</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="flex-shrink-0 text-loko-blue" />
                  <span>+225 27 21 24 00 00</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="flex-shrink-0 text-loko-blue" />
                  <span>contact@utt-loko.ci</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-black py-4 text-center text-xs text-gray-500">
          <div className="container mx-auto">
            © {new Date().getFullYear()} Université Tertiaire et Technologique LOKO. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
};