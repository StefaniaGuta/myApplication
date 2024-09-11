//import { useSelector } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
//import authSelectors from '../../redux/auth/authSelectors';

import style from './Navigation.module.css';

function Navigation() {
  //const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav>
      <Link className={style.Link} to="/" >
        Home
      </Link>
    </nav>
  );
}

export default Navigation;