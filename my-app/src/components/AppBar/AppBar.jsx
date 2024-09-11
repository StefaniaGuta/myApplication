import { useSelector } from 'react-redux';
import  authSelectors from '../../redux/auth/authSelectors';
import AuthForm from '../AuthForm/AuthForm';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import style from './AppBar.module.css';

function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <section className={style.Header}>
      <div className={style.Box}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthForm />}
      </div>
    </section>
  );
}

export default AppBar;