import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import authOperations from '../../redux/auth/authOperations';
import logo from './logo.png';
import menu from './menu.png'

import style from './UserInfo.module.css';


function UserInfo() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  

  return (
    <>
     <section>
        <Link to="/">
          <img src={logo} alt='logo'/>
        </Link>

        <img src={menu} alt='menu'/>

    </section>
    <section className={style.MenuContainer}>
      <div className={style.MenuBox}>
        <h1 className={style.MenuTitle}> {user.name} </h1>
      </div>
      <button className={style.MenuBtn}
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Exit
      </button>
    </section>
    </>
  );
}

export default UserInfo;