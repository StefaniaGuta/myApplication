import React from 'react';
import { useNavigate} from "react-router-dom";
import vector from './vector.png'
import DailyCalorieIntake from '../../components/DailyCalorieIntake/DailyCalorieIntake';

import style from './Modal.module.css'

const Modal = () => {
  let navigate = useNavigate();
  const handleRedirect = () => {
      navigate('/login');
}
   return (
    <>
    <button className={style.modalCloseButton} type='button' onClick={() => navigate(-1)}>
      <img src={vector} alt='vector'/>
    </button>
    <section className={style.modalWindow}>
        <h1 className={style.title}>Your recommended daily calorie intake is</h1>
        <h2 className={style.kcal}>2800 <span> kcal </span></h2>
        <span className={style.modalBorder}></span>

        <p className={style.foodList}>Foods you should not eat</p>
        <DailyCalorieIntake/>
        <button className={style.modalBtn} type="submit" onClick={handleRedirect}>
          Start losing weight
        </button>
    </section>
    </>
   )
}

export default Modal;