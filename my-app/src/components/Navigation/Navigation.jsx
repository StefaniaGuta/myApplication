import { useSelector } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import authSelectors from '../../redux/auth/authSelectors';

function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav>
      <Link to="/"></Link>
      <Link to="/login"></Link>
      <Link to="/register"></Link>

      {isLoggedIn && (
        <nav>
          <Link to="/diary"></Link>
          <Link to="/calculator"></Link>
        </nav>
      )}
    </nav>
  );
}


export default Navigation;