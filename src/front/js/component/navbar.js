import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { login } from "../pages/login";
import { Link } from "react-router-dom";
import "../../styles/index.css"

export const Navbar = () => {
  const { store, actions } = useContext(Context)
  return (
      <nav className="navbar bg-black">
          <div className="container-fluid">
              <Link to="/">
                  <a className="navbar-brand"></a>
                  <img className="width-img" src="https://www.actualidadiphone.com/wp-content/uploads/2016/07/pokemon-go.jpg"></img>
              </Link>
              <Link className="btn btn-outline-success rounded-pill px-4" to="/login">
                  Login
              </Link>
              <div className="ml-auto">
                  <div className="dropdown">
                      <button className="btn btn-outline-success rounded-pill px-4" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Favoritos 
                      </button>
                      <ul className="dropdown-menu dropdown-menu-end ">
                      </ul>
                  </div>
              </div>
          </div>
      </nav>
  );
};;


// <div className="ml-auto">
//                     <div className="dropdown">
//                         <button className="btn btn-outline-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
//                             Favoritos {store.favoritos.length}
//                         </button>
//                         <ul className="dropdown-menu dropdown-menu-end ">
//                             {store.favoritos.map((element) => {
//                                 return (
//                                     <li className="d-flex p-1">
//                                         <a className="dropdown-item" href="#">{element}</a>
//                                         <button className="btn btn-danger" onClick={() => actions.removeFavorites(element)}>x</button>
//                                     </li>
//                                 )
//                             })}
//                         </ul>
//                     </div>
//                 </div>