//import { useNavigate} from "react-router-dom";

import { useState } from 'react';
import calendar from './calendar.png'
import DiaryDateСalendar from '../../components/DiaryDateСalendar/DiaryDateСalendar';
import DiaryAddProductForm from '../../components/DiaryAddProductForm/DiaryAddProductForm';
import Summary from "../../components/Summary/Summary";

import style from './DiaryPage.module.css';



const DiaryPage= () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  //const navigate = useNavigate();


  const handleMenuClick = () => {
    if (isProcessing) return; 
      setIsProcessing(true);
    
      setTimeout(() => {
        setIsModalOpen(prevState => !prevState);
        setIsProcessing(false); 
    }, 100); 
  };

  const handleCalendarClick = () => {
    setIsCalendarOpen(prevState => !prevState); 
  };

  
  return (
    <>
      <section className={style.DiarySection}>
        <div className={style.DateCalendar}>
          <h2>{new Date().toLocaleDateString()}</h2>
          <img src={calendar} alt='calendar' onClick={handleCalendarClick}/>
        </div>

        {isCalendarOpen && (
          <div className={style.CalendarContainer}>
            <DiaryDateСalendar />
          </div>
        )}
        
        <button className={style.AddBtn} onClick={handleMenuClick}>+</button>
      </section>

      <Summary/>
      <DiaryAddProductForm isOpen={isModalOpen} onClose={handleMenuClick} />
    </>

  )
}

export default DiaryPage;