import React from 'react';
import '../index.css'



export const Navbar = function() {
    return (
        <nav className='entire-navbar'>
            <header className='nav-left-side'>
                <img id='troll-face' src='images/trollFace.png'/>
                <h2 id='website-header'>Meme Generator</h2>
            </header>

            <p id='nav-right-side'>
                React Course - Project 3
            </p>
        </nav>
    )
}