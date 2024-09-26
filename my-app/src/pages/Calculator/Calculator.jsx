import React from "react";
import DailyCaloriesForm from '../../components/DailyCaloriesForm/DailyCaloriesForm'
import style from './Calculator.module.css';

const CalculatorPage = () => {
    return (
        <div className={style.calcPage}>
            <div className={style.containerCalcPage}>
                <h1 className={style.title}>Calculate your daily calorie intake right now</h1>
                <DailyCaloriesForm />
            </div>
        </div>
    
    );
};

export default CalculatorPage;