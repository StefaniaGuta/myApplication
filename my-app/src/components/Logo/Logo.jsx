import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import authSelectors from '../../redux/auth/authSelectors';
import logoUser from './logoUser.png';
import menuImg from './menu.png';
import logoAuth from './logoAuth.png';
import MenuExit from './MenuExit.png';

import Menu from '../Menu/Menu'

import style from './Logo.module.css';

const Logo = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);


  const handleMenuClick = () => {
    if (isProcessing) return; 

    setIsProcessing(true);
    
    setTimeout(() => {
      setIsMenuOpen(prevState => !prevState);
      setIsProcessing(false); 
    }, 100); 
  };
  
  return (
    <>
      <nav className={style.NavLogo}>
     
        <Link to="/">
          <img src={isLoggedIn ? logoUser : logoAuth} alt='logo' />
        </Link>

        {isLoggedIn && (
          <img 
            src={isMenuOpen ? MenuExit : menuImg} 
            alt='menu' 
            onClick={handleMenuClick} 
            style={{ cursor: 'pointer' }} 
          />
        )}
      </nav>

      <Menu isOpen={isMenuOpen} onClose={handleMenuClick} />
    </>
  );
}


export default Logo;