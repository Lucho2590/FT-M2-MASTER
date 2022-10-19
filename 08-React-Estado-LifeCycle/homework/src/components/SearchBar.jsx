import React, { useState } from "react";

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState('');

  // function handleChange(event) {
  //   setCity(event.target.value)
  // }

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      onSearch(city);
      setCity('');
    }}>
      <input
        type="text"
        placeholder="Ciudad..."
        onChange={event=> setCity(event.target.value)} // ----> Se puede declarar la funcion en la misma linea de codigo
       // onChange={handleChange}
        value = {city}
      />
      <input type="submit" value="Agregar" /*onClick={handleChange}*//>
    </form>
  );
}

// import React, { useState } from "react";
// import s from './SearchBar.module.css'

// export default function SearchBar({onSearch}) {
//   const [city, setCities] = useState('')

//   function handleChange (event){
//     setCities(event.target.value);
//   }

//   return (
//     <form onSubmit={(event) => {
//       event.preventDefault(); // el metodo preventDefault, inpide que re refresque toda la pagina cuando re ejecuta en metodo onSeacrh.
//       onSearch(city);
//       setCities('');
//     }}>
//       <input
//         type="text"
//         placeholder="Ciudad..."
//         onChange={handleChange}
//         value = {city}
//       />
//       <input type="submit" value="Agregar" onClick={handleChange}/>
//     </form>
//   );
// }
