//import { useSelector } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
//import authSelectors from '../../redux/auth/authSelectors';
import logo from './logo.png'
import style from './Navigation.module.css';

function Navigation() {
  //const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav>
      <Link className={style.Link} to="/" >
        <img src={logo} alt='logo'/>
      </Link>
    </nav>
  );
}


export default Navigation;