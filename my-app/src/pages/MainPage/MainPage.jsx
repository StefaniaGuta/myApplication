import { useSelector } from 'react-redux';
import DailyCaloriesForm from '../../components/DailyCaloriesForm/DailyCaloriesForm'
import authSelectors from '../../redux/auth/authSelectors';

import style from './MainPage.module.css';

function MainPage() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  
  return (
    <>
    <DailyCaloriesForm/>

    {isLoggedIn && (
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
      )}
    </>
)};

export default MainPage;
