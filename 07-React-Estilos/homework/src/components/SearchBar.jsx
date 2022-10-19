import React, { useState } from 'react';
import s from './SearchBar.module.css';

export default function SearchBar(props) {
  const [inputValue, setInputValue] = useState("soy un estado vacio")
  
  // acá va tu código
  function handleChange(event) {
    console.log(event.target.value);
    setInputValue(event.target.value);
  }

  function handleSearch (){
    alert("No hay tal ciudad como " + inputValue + ", abrigate por las dudas...")
  }
  
  return <div>
    {inputValue}
    <input placeholder="Ciudades..." onChange={handleChange} />
    <button onClick={handleSearch} className={s.btnBuscar}>Buscar</button>
  </div>

}; 