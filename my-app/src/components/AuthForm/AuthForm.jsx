import React from 'react';
import { Link } from 'react-router-dom';
import style from './AuthForm.module.css';

function AuthForm() {
  return (
    <nav>
      <Link className={style.Link} to="/register">
        Sign up
      </Link>
      
      <Link className={style.Link} to="/login">
        Log in
      </Link>
    </nav>
  );
}
export default AuthForm;
