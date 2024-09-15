import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/authSelectors';
import AuthForm from '../AuthForm/AuthForm';
import Navigation from '../Navigation/Navigation';
import UserInfo from '../UserInfo/UserInfo';
import style from './Header.module.css';
import Logo from '../Logo/Logo';

function Header() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <section className={style.Header}>
      <div className={style.Box}>
        <Logo />
       <Navigation/>
        {isLoggedIn ? <UserInfo /> : <AuthForm />}
      </div>
    </section>
  );
}

export default Header;