import { useDispatch, useSelector } from 'react-redux';
import authOperations from '../../redux/auth/authOperations';
import authSelectors from '../../redux/auth/authSelectors';
import style from './UserMenu.module.css';

function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <section className={style.MenuContainer}>
      <div className={style.MenuBox}>
        <h1 className={style.MenuTitle}> Welcome, {name} </h1>
      </div>
      <button className={style.MenuBtn}
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log Out
      </button>
    </section>
  );
}

export default UserMenu;