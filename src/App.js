import logo from './logo.svg';
import './App.css';
import react, { Component, PureComponent } from "react";
import axios from "axios";
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import BlogSection from './blogsection';
import HeaderSection from './header';
import FooterSection from './footer';
import OptionsSection from './options';

export class App extends Component {
    render() {
        return (
            <>
                <HeaderSection />
                <OptionsSection/>
                {/* <p>diana tution classes</p> */}

                <BlogSection />
               

                <FooterSection/>
                
            </>
        )
    }


}

export default App;




















