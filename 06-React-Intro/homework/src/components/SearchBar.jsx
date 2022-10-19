import React, { useState } from 'react';

export default function SearchBar(props) {
  const [inputValue, setInputValue] = useState("soy un estado vacio")
  
  // acá va tu código
  function handleChange(event) {
    console.log(event.target.value);
    setInputValue(event.target.value);
  }

  function handleSearch (){
    alert("Lucho gato " + inputValue)
  }
  
  return <div>
    valor input: {inputValue}
    <input placeholder="Ciudades..." onChange={handleChange} />
    <button onClick={handleSearch}>Buscar</button>
  </div>

};