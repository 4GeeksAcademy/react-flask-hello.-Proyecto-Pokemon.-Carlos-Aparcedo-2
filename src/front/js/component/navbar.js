import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
// import { Login } from "../views/login";
export const Navbar = () => {
    const { store, actions } = useContext(Context)
    return (
        <nav className="navbar-brand navbar bg-black">
            <div className="container-fluid">
                <Link to="/">
                    {/* <a className=""></a> */}
                    <img className="width-img w-25" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png"/>
                </Link>
                <Link className="btn btn-outline-success rounded-pill px-4" to="/signin">
                    Login
                </Link>
                <div className="ml-auto">
                    <div className="dropdown">
                        <button className="btn btn-outline-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Favoritos {store.favoritos.length}
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end ">
                            {store.favoritos.map((item) => {
                                return (
                                    <li className="d-flex p-1">
                                        <a className="dropdown-item" href="#">{item}</a>
                                        <button className="btn btn-danger" onClick={() => actions.deleteFavoritos(item)}>x</button>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};