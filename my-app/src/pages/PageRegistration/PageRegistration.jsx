import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/authOperations';
import style from './PageRegistration.module.css';
import {useNavigate } from "react-router-dom";

function PageRegistration() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  const resetForm = () => {
    setForm({ name: '', email: '', password: '' });
  };
  
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ ...form }));
    resetForm();
    navigate("/");
  };

  const { name, email, password } = form;

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <section className={style.PageRegistrationSection}>
      <h1 className={style.PageRegistrationTitle}>REGISTER</h1>
      <form onSubmit={handleSubmit} className={style.RegisterForm}>
        <label >
          <input className={style.PageRegistrationInput}
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces."
            placeholder="NAME *"
            required
            value={name}
            onChange={handleChange}
          />
        </label>

        <label >
          <input className={style.PageRegistrationInput}
            type="email"
            name="email"
            title="Enter your email"
            placeholder="EMAIL *"
            required
            value={email}
            onChange={handleChange}
          />
        </label>

        <label className={style.PageRegistrationLabel}>
          <input className={style.PageRegistrationInput}       
            type="password"
            name="password"
            placeholder="PASSWORD *"
            required
            value={password}
            onChange={handleChange}
          />
        </label>
        <button className={style.PageRegistrationBtn} type="submit">
          REGISTER
        </button>
        <span></span>
        <button className={style.PageRegistrationBtn} type="button" onClick={handleClick}>
          LOG IN
        </button>
      </form>
    </section>
  );
}
export default PageRegistration;
