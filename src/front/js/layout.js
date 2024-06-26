import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { LandingPage } from "./component/landingPage";
import { Pokedex } from "./pages/pokedex";
import { PokemonDetail } from "./pages/pokemonDetail";
import { Login } from "./pages/login";
// import { UserPage } from "./pages/userPage";


//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    // if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>

                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<h1>Not found!</h1>} />
                        <Route element={<LandingPage />} path="/" />
                        <Route element={<Pokedex />} path="/pokedex" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<PokemonDetail />} path="/pokedex/:pokemonId" />
                        <Route element={<Login />} path="/login" />
                        <Route element={<Login />} path="/formulario" />
                        {/* <Route element={<UserPage />} path="/userPage" /> */}

                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);