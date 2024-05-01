// import React,{ useEffect, useState, useContext} from "react";
// import { useParams } from "react-router-dom";
// import { Context } from "../store/appContext";
// export function VistaDetallada() {
//     const { id } = useParams();
//     const url = 'https://pokeapi.co/api/v2/pokemon/'+ id
//     console.log(url);
//     const {store, actions} = useContext(Context);
//     useEffect(() =>{
//         actions.getDetalles(url)
//     })
// }