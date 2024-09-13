import { useDispatch, useSelector } from 'react-redux';
import authOperations from '../../redux/auth/authOperations';
//import authSelectors from '../../redux/auth/authSelectors';
import style from './UserMenu.module.css';

function UserMenu() {
  const dispatch = useDispatch();
  //const name = useSelector(authSelectors.getUserName);
  const user = useSelector((state) => state.auth.user);
  

  return (
    <section className={style.MenuContainer}>
      <div className={style.MenuBox}>
        <h1 className={style.MenuTitle}> {user.name} </h1>
      </div>
      <button className={style.MenuBtn}
        type="button"
        onClick={() => dispatch(authOperations.logOut)}
      >
        Exit
      </button>
    </section>
  );
}

export default UserMenu;