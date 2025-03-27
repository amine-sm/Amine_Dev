import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import './styles.scss';
import logo from '../../assets/a.jpg';

const menuItems = [
  { label: 'HOME', to: 'home' },
  { label: 'ABOUT', to: 'about' },
  { label: 'SKILLS', to: 'skills' },
  { label: 'CONTACT', to: 'contact' }
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false); // Ferme le menu mobile après clic
    }
  };

  return (
    <nav className='navbar'>
      <div className='navbar__container'>
        {/* Logo avec image */}
        <a href="#home" onClick={(e) => { e.preventDefault(); handleScrollToSection('home'); }} className='navbar__logo'>
          <img src={logo} alt="Logo" className="navbar__logo__image" />
        </a>

        {/* Menu dynamique */}
        <ul className={`navbar__menu ${menuOpen ? 'active' : ''}`}>
          {menuItems.map((item, index) => (
            <li key={index} className='navbar__menu__item'>
              <a href={`#${item.to}`} onClick={(e) => { e.preventDefault(); handleScrollToSection(item.to); }} className='navbar__menu__link'>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Icône du menu mobile */}
        <div className='navbar__toggle' onClick={handleMenuToggle}>
          {menuOpen ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
