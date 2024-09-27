import React from "react";
import style from './CalculatorPage.module.css';
import CalculatorCalorieForm from '../../components/CalculatorCalorieForm/CalculatorCalorieForm';

const CalculatorPage = () => {
    return (
        <div className={style.calcPage}>
            <div className={style.containerCalcPage}>
                <h1 className={style.title}>Calculate your daily calorie intake right now</h1>
                <CalculatorCalorieForm />
            </div>
        </div>
    
    );
};

export default CalculatorPage;