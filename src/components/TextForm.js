import React from 'react';
import { memesDataArray } from './MemesData';



export const TextForm = function() {
    // you usually define ALL functions and ALL variables at the top, you only return the JSX at the end

    // const handleClick = function() {
    //     alert('Button was clicked!')
    // }

    // const handleMouseEnter = function() {
    //     alert('You hovered over this button')
    // }

    const getRandomMemeImage = function(e) {
        // prevent page reload
        e.preventDefault();
        
        // create random number between 0 and 99
        let randomNumber = Math.floor(Math.random() * memesDataArray.data.memes.length);
        
        console.log(memesDataArray.data.memes[randomNumber].url)
    }




    return (
        <form className='entire-form'>

            <label className='labels' id='top-line-label'>
                <input type='text' placeholder='Top text'/>
            </label>

            <label className='labels' id='bottom-line-label'>
                <input type='text' placeholder='Bottom text'/>
            </label>

            {/* there is another way to add an event listener in javascript, and that's the onClick attribute in HTML, this is the main way we will add click events using React */}
            {/* usually its onclick , but for JSX it's in camelcase, onClick */}
            {/* you can add other events as well like onMouseEnter and onMouseLeave*/}
            {/* we pass in a function that we want to execute once that event occurs */}
            <button onClick={getRandomMemeImage} onMouseEnter={2} id='get-new-meme-btn'>Get a new meme image</button>

        </form>
    )
} 