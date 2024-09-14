import { useSelector } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import authSelectors from '../../redux/auth/authSelectors';



function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav>
      {
      <Link  to="/login"></Link> ||  <Link to='/register'></Link>
      }

      {isLoggedIn && (
        <Link 
        to="/"      
      >
      </Link>
      )}
    </nav>
  );
}


export default Navigation;