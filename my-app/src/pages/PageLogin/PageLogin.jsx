import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/authOperations';

import style from './PageLogin.module.css';

function PageLogin() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(authOperations.logIn({ ...form }));
    setForm({ email: '', password: '' });
  };

  const { email, password } = form;

  return (
    <section className={style.PageLoginSection}>
      <h1 className={style.PageLoginTitle}>LOG IN</h1>
      <form onSubmit={handleSubmit} className={style.LoginForm}>
        <label className={style.PageLogInLabel}>
         
          < input className={style.PageLogInInput}
            type="email"
            name="email"
            title="Enter your email"
            placeholder="Email *"
            required
            value={email}
            onChange={handleChange}
          />
        </label>

        < label className={style.PageLogInLabel}>
         
          <input className={style.PageLogInInput}
            type="password"
            name="password"
            title="Enter your password"
            placeholder="Password *"
            required
            value={password}
            onChange={handleChange}
          />
        </label>
            <button className={style.pageLogInBtn} type="submit" >LOG IN</button>
            <span></span>
            <button className={style.pageLogInBtn} type="submit" disabled={true}>REGISTER</button>
      </form>
    </section>
  );
};

export default PageLogin;