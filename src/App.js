import logo from './logo.svg';
import './App.css';
import react, { Component, PureComponent, useEffect } from "react";
import axios from "axios";
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainSection from './mainsections';
import HeaderSection from './header';
import FooterSection from './footer';
import OptionsSection from './options';

function App(){

    const [poppularmovies,setpopularmovies]= useState([]);
    useEffect(()=>{
        axios.get("https://api.themoviedb.org/3/movie/popular?api_key=cfe422613b250f702980a3bbf9e90716")
        .then
    })
}

export default App;




















