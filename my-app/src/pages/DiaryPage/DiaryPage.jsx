//import { useNavigate} from "react-router-dom";
//const navigate = useNavigate();
import calendar from './calendar.png'

const DiaryPage= () => {
    return (
        <>
        <section>
            <div>
                <h2>{new Date().toLocaleDateString()}</h2>
                <img src={calendar} alt='calendar'/>
            </div>
            <ul>
                <button type='button'>
                    X
                </button>
            </ul>
        </section>
        </>
    )
}

export default DiaryPage;