import React from 'react';
import './Cards.css';

import Card from './Card.jsx';

export default function Cards({cities, onClose}) {
  if(cities){
    return (
      <div className='cards'>
        {cities.map(c => <Card
            key={c.id}
            max={c.max}
            min={c.min}
            name={c.name}
            img={c.img}
            onClose={() => onClose(c.id)}
            id={c.id}
          /> )}
      </div>
    );
  } else {
    return(
      <div>Sin ciudades</div>
    )
  }
}
// import React from 'react';
// import Card from './Card.jsx';
// import s from '.components/Cards.module.css'

// export default function Cards({cities, onClose}) {
//   // acá va tu código
//   // tip, podés usar un map
  
//   return (
//   <div className={s.targ}>
//     {
//     (cities.map( c => (
//      <Card  
//         hey= {c.id}
//         max={c.max} 
//         min={c.min}
//         name={c.name}
//         img={c.img}
//         onClose={() => onClose(c.id)}
//       />
//       ))
//     )}
//   </div>
//   )
// };
