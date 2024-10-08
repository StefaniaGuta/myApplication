import { useState } from 'react';
import { useNavigate} from "react-router-dom";
import authSelectors from '../../redux/auth/authSelectors';
import { useSelector } from 'react-redux';

import style from './DailyCaloriesForm.module.css'

const DailyCaloriesForm = () => {
  //const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    
  const [form, setForm] = useState({
    height: '',
    age: '',
    currentWeight: '',
    desiredWeight: '',
    bloodType: ''
  });

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    
    setForm(prevForm => ({
      ...prevForm,
      [name]: value
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    
    console.log(form);

    setForm({
      height: '',
      age: '',
      currentWeight: '',
      desiredWeight: '',
      bloodType: '' 
    });
    if(!isLoggedIn){
      navigate('/Modal'); 
    } else {
      navigate ('/diary')
    }
  }
    
  return (
    <>
    <section className={style.PageHomeSection}>
      <h1 className={style.PageHomeTitle}>
        Calculate your daily calorie intake right now
      </h1>
      <form onSubmit={handleSubmit} className={style.HomeForm}>
        <label>
          <input
            className={style.PageHomeInput}
            type="number"
            placeholder="HEIGHT *"
            name="height"                 
            value={form.height}           
            required
            onChange={handleChange}       
          />
        </label>

        <label>
          <input
            className={style.PageHomeInput}
            type="number"
            placeholder="AGE *"
            name="age"                    
            value={form.age}              
            required
            onChange={handleChange}       
          />
        </label>

        <label>
          <input
            className={style.PageHomeInput}
            type="number"
            placeholder="CURRENT WEIGHT *"
            name="currentWeight"          
            value={form.currentWeight}    
            required
            onChange={handleChange}       
          />
        </label>

        <label>
          <input
            className={style.PageHomeInput}
            type="number"
            placeholder="DESIRED WEIGHT *"
            name="desiredWeight"          
            value={form.desiredWeight}    
            required
            onChange={handleChange}       
          />
        </label>

        <fieldset className={style.RadioGroup}>
          <legend>Blood Type *</legend>

          <label>
            <input
              type="radio"
              name="bloodType"
              value="1"
              required
              checked={form.bloodType === '1'}
              onChange={handleChange}
            />
              1
          </label>

          <label>
            <input 
              type="radio"
              name="bloodType"
              value="2"
              required
              checked={form.bloodType === '2'}
              onChange={handleChange}
            />
              2
          </label>

          <label>
            <input 
              type="radio"
              name="bloodType"
              value="3"
              required
              checked={form.bloodType === '3'}
              onChange={handleChange}
            />
              3
          </label>

          <label>
            <input 
              type="radio"
              name="bloodType"
              value="4"
              required
              checked={form.bloodType === '4'}
              onChange={handleChange}
            />
              4
          </label>
        </fieldset>

        <button className={style.PageHomeBtn} type="submit">
          Start losing weight
        </button>
      </form>
    </section>
    </>

);
}

export default DailyCaloriesForm;