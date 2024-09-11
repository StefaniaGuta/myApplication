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
      <h1 className={style.PageLoginTitle}>Please enter your email and password</h1>
      <form onSubmit={handleSubmit}>
        <label className={style.PageLogInLabel}>
          Email
          < input className={style.PageLogInInput}
            type="email"
            name="email"
            title="Enter your email"
            placeholder="Example user@mail.com"
            required
            value={email}
            onChange={handleChange}
          />
        </label>

        < label className={style.PageLogInLabel}>
          Password
          <input className={style.PageLogInInput}
            type="password"
            name="password"
            title="Enter your password"
            required
            value={password}
            onChange={handleChange}
          />
            <button className={style.pageLogInBtn} type="submit" >Log In</button>
        </label>
      </form>
    </section>
  );
};

export default PageLogin;