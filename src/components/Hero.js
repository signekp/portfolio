import React from 'react'
import picOfMe from '../images/me.jpeg'
import { HashLink } from 'react-router-hash-link';


export default function Hero() {


    return (

        <section className="home-section active">
            <h1 className="hero-heading">Hello i am</h1>
            <h2 className="heading">Signe Petersen</h2>
            <p className='hero-paragraph'>I am a webdeveloper</p>
            <img src={picOfMe} className="home-img" alt="me"></img>
            <HashLink smooth to="/#projectSection"> <button className='home-button'>See more</button></HashLink>
            <div id='projectSection'></div>
        </section >

    )
}