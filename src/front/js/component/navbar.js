import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

import { Link } from "react-router-dom";
// import logo from "../../img/logo.png"
import "../../styles/navbar.css"

export const Navbar = () => {
    const { store, actions } = useContext(Context)

    return (
        <nav className="navbar navbar-expand-lg navbar-bg">
            <div className="container-fluid">

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <form className="d-flex ms-3 me-3 form-navbar" >
                        <input className="form-control  bg-light input-form " type="search" placeholder="Buscar" aria-label="Search" />
                        <span className="btn bg-light br-0 btn-submit" type="submit" ></span>

                    </form>

                    <div className="btn  buttton-login-navbar mb-2 mb-lg-0 col-md-7  col-sm-4 ">
                    </div>
                </div>
            </div>
        </nav>
    );
};
