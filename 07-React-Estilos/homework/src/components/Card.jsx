import React from 'react';
import s from './Card.module.css'

export default function Card ({onClose,name,max,min,img}) {
  // acá va tu código
  return ( 
  <div className={ s.root }>
    < button onClick={onClose} className={s.btnClose}> x </button>  
    <h2>{name}</h2> 
    <div className={s.info}>
     <div className={s.temp}>
       <p>Max</p>
       <p>{max}º</p>
     </div>
     <div className={s.temp}>
       <p>Min</p>
       <p>{min}º</p>
     </div>
     <div>
       <img src ={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="Image not found"/>
     </div>
    </div>
  </div>
  ) 
};