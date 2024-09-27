import React, { useEffect } from 'react';
import style from './Summary.module.css';


export default function Summary({ consumedCalories, dailyRate = 2800 }) {
  const leftCalories = dailyRate - consumedCalories;
  const percentageOfNormal = ((consumedCalories / dailyRate) * 100).toFixed(2);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
       
      } catch (error) {
        console.error('Token invalid:', error);
      }
    }
  }, []);

  return (
    <div className={style.SummarySection}>
      <div className={style.container}>
        <div className={style.leftSideContainer}>
          <h4 className={style.title}>Summary for {new Date().toLocaleDateString('en-GB')}</h4>
          <ul className={style.list}>
            <li className={style.listItem}>
              <span>Left</span>
              <span>{leftCalories} kcal</span>
            </li>
            <li className={style.listItem}>
              <span>Consumed</span>
              <span>{consumedCalories} kcal</span>
            </li>
            <li className={style.listItem}>
              <span>Daily rate</span>
              <span>{dailyRate} kcal</span>
            </li>
            <li className={style.listItem}>
              <span>{percentageOfNormal}% of normal</span>
              <span>{consumedCalories} kcal</span>
            </li>
          </ul>
        </div>
        <div className={style.rightSideContainer}>
          <h4 className={style.title}>Food not recommended</h4>
          <p>Your diet will be displayed here</p>
        </div>
      </div>
    </div>
  );
}