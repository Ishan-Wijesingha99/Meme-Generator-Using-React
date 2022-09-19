import React from 'react';
import { memesDataArray } from './MemesData';



export const TextForm = function() {
    // you usually define ALL functions and ALL variables at the top, you only return the JSX at the end
    
    // meme image logic
    const [imageURL, setImageURL] = React.useState('');

    const getRandomMemeImage = function(e) {
        // prevent page reload
        e.preventDefault();
        
        // create random number between 0 and 99
        let randomNumber = Math.floor(Math.random() * memesDataArray.data.memes.length);
        
        // based off random number, get a random meme URL
        setImageURL(`${memesDataArray.data.memes[randomNumber].url}`)
    }

    // return JSX
    return (
        <div>
            <form className='entire-form'>

                <label className='labels' id='top-line-label'>
                    <input
                        type='text'
                        placeholder='Top text'
                    />
                </label>

                <label className='labels' id='bottom-line-label'>
                    <input
                        type='text'
                        placeholder='Bottom text'
                    />
                </label>

                {/* there is another way to add an event listener in javascript, and that's the onClick attribute in HTML, this is the main way we will add click events using React */}
                {/* usually its onclick , but for JSX it's in camelcase, onClick */}
                {/* you can add other events as well like onMouseEnter and onMouseLeave*/}
                {/* we pass in a function that we want to execute once that event occurs */}
                <button
                    onClick={getRandomMemeImage}
                    id='get-new-meme-btn'
                    type='button'
                >
                    Get a new meme image
                </button>

            </form>

            <img id='meme-image' src={imageURL}/>
        </div>
    )
}