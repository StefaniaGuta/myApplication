import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/authSelectors';
import style from './PageHome.module.css';

function PageHome() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      <section className={style.PageHomeSection}>
            <h1 className={style.PageHomeTitle}>Welcome to our friendly phonebook app</h1>
        <p className={style.PageHomeTitle2}>Organize your contacts easily and stay connected with loved
            ones. <br></br> 
            Use digital tools to create and maintain a comprehensive contact list, and keep in touch through PHONEBOOK.
            </p>
        {!isLoggedIn && (      
          
          <p className={style.PageHomeText}> Please, <b>Sign up</b> or <b>Log in</b> to have access to the
            Phonebook!
          </p>
      )}
      </section>
      
    </>
  );
}

export default PageHome;
