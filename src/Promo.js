import React from 'react';
import './App.css';
import breakerad from './breakerad.mp4';
import {Route, Routes} from "react-router-dom";
import Buy from './Buy.js';



const products = [
    { id: 1, name: 'HEARTBREAKER "BREAK ME PLEASE T-SHIRT', price: 3000, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'HEARTBREAKER "BREAK ME PLEASE T-SHIRT', price: 3000, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'HEARTBREAKER "BREAK ME PLEASE T-SHIRT', price: 3000, image: 'https://via.placeholder.com/150' },
];

function Promo() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="fullscreen-bg">
                    <div className="overlay">
                    </div>


                    <video src={breakerad} autoPlay loop muted className="fullscreen-bg__video">
                    </video>
                </div>
            </header>
            <main>


                <div className="main-container">
                    <a href="./Buy.js" className="redirect-btn">Купить</a>
                </div>




            </main>
            <footer>

            </footer>
        </div>

    );
}

export default Promo;