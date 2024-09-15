import { useDispatch, useSelector } from 'react-redux';
import authOperations from '../../redux/auth/authOperations';

import style from './UserInfo.module.css';


function UserInfo() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  
  return (
    <>
    <section className={style.MenuContainer}>
      
        <h1 className={style.UserName}> {user.name} </h1>
   
      <span></span>
      <button className={style.ExitBtn}
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