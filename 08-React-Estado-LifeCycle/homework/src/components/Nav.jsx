import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <div>
      <img src={Logo} alt='Logo not found'/>
      <h3>Henry - Weather App </h3>
      <SearchBar onSearch={onSearch}/>
    </div>
  );
};
export default Nav;

// import React from 'react';
// import Logo from '../logoHenry.png'
// import SearchBar from './SearchBar.jsx';


// function Nav({onSearch}) {
//   return (
//     <div >
//       <nav>
//         <img src={Logo} alt='Image not found'/>      
//         <h1>HENRY - Weather App</h1>
//         <SearchBar onSearch={onSearch}/>  
//       </nav> 
//     </div>
//   );
// };

// export default Nav;
