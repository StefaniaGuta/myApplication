import { useState } from 'react';
import React from 'react';
import { useEffect, useRef } from 'react';
import vector from './vector.png'

import style from './DiaryModal.module.css'

const DiaryModal = ({ isOpen, onClose }) => {
  
  const [form, setForm] = useState({
    name: '',
    grams: ''
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
      name: '',
      grams: ''
    });
  }

  const modalRef = useRef(null);

  
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose(); 
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  if (!isOpen) {
    return null;
  }
    
  return (
    <>
    <section className={style.DiaryModalSection}>
      <button className={style.ModalExit} type='button' onClick={onClose}>
        <img src={vector} alt='vector'/>
      </button>
      <form onSubmit={handleSubmit} className={style.ModalForm}>
        <label>
          <input
            className={style.ModalInput}
            type="text"
            placeholder="Enter product name"
            name="name"                 
            value={form.name}           
            required
            autoComplete='off'
            onChange={handleChange}       
          />
        </label>
        <label>
          <input
            className={style.ModalInput}
            type="number"
            placeholder="Grams"
            name="grams"                 
            value={form.grams}           
            required
            onChange={handleChange}       
          />
        </label>
        </form>
        <button className={style.AddBtn} type='submit' onClick={handleSubmit}>Add</button>
        </section>
        </>
        )
}

export default DiaryModal;