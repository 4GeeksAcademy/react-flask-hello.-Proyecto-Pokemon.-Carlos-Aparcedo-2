import React from 'react';
import { Link } from "react-router-dom";
import "../../styles/pikachuAnimation.css"

export const PikachuAnimation = () => {
  return (
    <div className='pikachu-animation-bg'>
      <div className='container-fluid p-4'>
        <div className='row'>
          <div className='col-6'>
            <img src="https://media.giphy.com/media/slVWEctHZKvWU/giphy.gif" className="col-6 pikachu" alt="Pikachu Animation" />
          </div>
          <div className="col-6 d-flex justify-content-center align-items-center">
            <p className="text-center fw-bold p-5">Bienvenido al mundo Pokemon</p>
            <Link to="/pokedex" className="btn btn-hazte d-flex">Hazte con todos!</Link>
          </div>
        </div>
      </div>
    </div>
  );
}


// import React from 'react';
// import { Link } from "react-router-dom";
// import './styles.css'; // 

// export const PikachuAnimation = () => {
//   return (
//     <div className="pikachu-animation-bg bg-danger">  
//       <div className="container-fluid p-4">
//         <div className="row">
//           <div className="col-md-6 d-flex align-items-center justify-content-center">
//             <img src="https://media.giphy.com/media/slVWEctHZKvWU/giphy.gif" className="pikachu rounded-lg" alt="Pikachu Animation" />
//           </div>
//           <div className="col-md-6 d-flex align-items-center justify-content-center">
//             <p className="text-center fw-bold p-5">Bienvenido al mundo Pokemon</p>
//             <Link to="/pokedex" className="btn btn-hazte btn-lg">Hazte con todos!</Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };