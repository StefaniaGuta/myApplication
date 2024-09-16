import React from 'react';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';


import style from './Menu.module.css';

const Menu = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);

  
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose(); 
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  if (!isOpen) {
    return null;
  }
    
  return (
     <section className={style.MenuSection}>
     <nav className={style.MenuNav}>
       <Link className={style.MenuLink} to="/diary">
         DIARY
       </Link>
       
       <Link className={style.MenuLink} to="/calculator">
         CALCULATOR
       </Link>
     </nav>
     </section>
      
  );
}
export default Menu;