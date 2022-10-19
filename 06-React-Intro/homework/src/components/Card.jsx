import React from 'react';

export default function Card ({onClose,name,max,min,img}) {
  // acá va tu código

  return (
  <div>
    <button onClick={onClose}>X</button>  
    <h3> Ciudad: {name}</h3> 
    <div>
      <p>Max</p>
      <p>{max}</p>
    </div>
    <div>
      <p>Min</p>
      <p>{min}</p>
    </div>
    <div>
      <img src ={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="Image not found"/>
    </div>
  </div>
  )
};