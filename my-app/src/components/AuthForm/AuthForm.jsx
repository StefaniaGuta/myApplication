import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png'

import style from './AuthForm.module.css';

function AuthForm() {
  return (
    <>
    <Link to="/">
    <img src={logo} alt='logo'/>
    </Link>
    <nav className={style.Nav}>
      <Link className={style.Link} to="/login">
        LOG IN
      </Link>
      
      <Link className={style.Link} to="/register">
        REGISTRATION
      </Link>
    </nav>
    </>
  );
}
export default AuthForm;
