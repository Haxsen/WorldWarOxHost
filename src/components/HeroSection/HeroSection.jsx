import React from 'react';
import herologo from "../../assets/herologo.png";
import gamePlay from '../../assets/Gameplay.mp4';
import './HeroSection.css';

const HeroSection = ({ moveToBack }) => {
    return (
        <div>
            <div className={moveToBack ? "HeroSectionContainer moveToBack" : "HeroSectionContainer"}>
                <video controls muted autoPlay loop className="video-container no-controls">
                    <source src={gamePlay} type="video/mp4" />
                </video>
                <div className="HeroCenteredContent">
                    <img className="" alt="" src={herologo} />
                    <h2>LOW POLY WORLD WAR 3 HAS ARRIVED</h2>
                    <h3>BROWSER-BASED MULTIPLAYER FPS WITH VEHICLES</h3>
                    <div className="HeroSectionBtns">
                        <div className="svg-clip-1">PLAY ALPHA</div>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSc7c1H_PDroVkPz5AztS6pLKLWjDTFerMNgHQiCO7nn1oL2Kg/viewform" className="svg-clip-2" target="_blank" rel="noreferrer">WHITELIST NOW</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection