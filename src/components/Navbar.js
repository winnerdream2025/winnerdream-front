import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { auth } from '../firebase/firebase';
import logo from '../assets/logo.png';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleLogout = async () => {
    await auth.signOut();
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow-md px-4 py-3 flex justify-between items-center relative z-50">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
        <span className="font-bold text-lg text-green-700">WinnerDream</span>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
        <li><Link to="/home" className="hover:text-green-600">{t('navbar.home')}</Link></li>
        <li><Link to="/dashboard" className="hover:text-green-600">{t('navbar.dashboard')}</Link></li>
        <li><Link to="/shop" className="hover:text-green-600">{t('navbar.shop')}</Link></li>
        <li><button onClick={handleLogout} className="text-red-600 hover:underline">{t('navbar.logout')}</button></li>
      </ul>

      {/* Hamburger (Mobile) */}
      <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute top-full left-0 w-full bg-white flex flex-col items-center gap-4 py-4 shadow-md md:hidden">
          <li><Link to="/home" onClick={() => setMenuOpen(false)}>{t('navbar.home')}</Link></li>
          <li><Link to="/dashboard" onClick={() => setMenuOpen(false)}>{t('navbar.dashboard')}</Link></li>
          <li><Link to="/shop" onClick={() => setMenuOpen(false)}>{t('navbar.shop')}</Link></li>
          <li><button onClick={handleLogout} className="text-red-600">{t('navbar.logout')}</button></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;







