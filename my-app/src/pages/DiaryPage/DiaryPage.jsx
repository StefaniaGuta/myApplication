//import { useNavigate} from "react-router-dom";
//const navigate = useNavigate();
import { useState } from 'react';
import calendar from './calendar.png'
import DiaryModal from '../../components/DiaryModal/DiaryModal';

import style from './DiaryPage.module.css';


const DiaryPage= () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);


  const handleMenuClick = () => {
    if (isProcessing) return; 
      setIsProcessing(true);
    
      setTimeout(() => {
        setIsModalOpen(prevState => !prevState);
        setIsProcessing(false); 
    }, 100); 
  };

  return (
    <>
      <section className={style.DiarySection}>
        <div className={style.DateCalendar}>
          <h2>{new Date().toLocaleDateString()}</h2>
          <img src={calendar} alt='calendar'/>
        </div>
        <button className={style.AddBtn} onClick={handleMenuClick} >+</button>
      </section>

      <section className={style.SummarySection}>
          <h2 className={style.Summary}>Summary for {new Date().toLocaleDateString()}</h2>
          <div className={style.valuesSection}>
            <div>
              <p>Left</p>
              <p>Consumed</p>
              <p>Daily rate</p>
              <p>n% of normal</p>
            </div>
            <div>
              <p>000 kcal</p>
              <p>000 kcal</p>
              <p>000 kcal</p>
              <p>000 kcal</p>
            </div>
          </div>
          <h2 className={style.Summary}>Food not recommended</h2>
          <p>Food not recommended</p>  
        </section>
      <DiaryModal isOpen={isModalOpen} onClose={handleMenuClick} />
    </>

  )
}

export default DiaryPage;