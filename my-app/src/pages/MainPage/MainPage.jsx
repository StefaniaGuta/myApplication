import { useSelector } from 'react-redux';
import DailyCaloriesForm from '../../components/DailyCaloriesForm/DailyCaloriesForm'
import authSelectors from '../../redux/auth/authSelectors';
import Summary from '../../components/Summary/Summary'



function MainPage() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  
  return (
    <>
    <DailyCaloriesForm/>

    {isLoggedIn && (
        <Summary/>
      )}
    </>
)};

export default MainPage;
