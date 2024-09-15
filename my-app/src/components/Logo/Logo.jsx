import { Link } from 'react-router-dom';
import logoUser from './logoUser.png';
import menu from './menu.png';
import logoAuth from './logoAuth.png';
import authSelectors from '../../redux/auth/authSelectors';
import { useSelector } from 'react-redux';

import style from './Logo.module.css';

const Logo = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav className={style.NavLogo}>
      <Link to="/">
        <img src={isLoggedIn ? logoUser : logoAuth} alt='logo' />
      </Link>

      {isLoggedIn && <img src={menu} alt='menu' />}
    </nav>
  );
}

export default Logo;