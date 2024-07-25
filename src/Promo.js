import React from 'react';
import './App.css';
import breakerad from './breakerad.mp4';






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