import React from "react";
import { memesDataArray } from './MemesData';



export const TextFormUpdated = function() {
    
    // create a state variable that is an object
    const [memeObject, setMemeObject] = React.useState({
        topText: '',
        bottomText: '',
        randomImageURL: 'https://i.imgflip.com/gtj5t.jpg'
    })

    // create another state variable that at first is just the memesDataArray
    const [allMemeImages, setAllMemeImages] = React.useState(memesDataArray);



    const getRandomMemeImage = function(e) {
        // prevent page reload
        e.preventDefault();
        
        // create random number between 0 and 99
        let randomNumber = Math.floor(Math.random() * memesDataArray.data.memes.length);
        
        // change the memeObject, with all of it's properties the exact same, accept for the randomImageURL, which changes based off the random number
        setMemeObject(memeObject => {
            return {
                ...memeObject,
                randomImageURL: allMemeImages.data.memes[randomNumber].url
            }
        })
    }

    

    return (
        <div>
            <form className='entire-form'>

                <label className='labels' id='top-line-label'>
                    <input type='text' placeholder='Top text'/>
                </label>

                <label className='labels' id='bottom-line-label'>
                    <input type='text' placeholder='Bottom text'/>
                </label>

                <button onClick={getRandomMemeImage} id='get-new-meme-btn'>Get a new meme image</button>

            </form>

            <img id='meme-image' src={memeObject.randomImageURL}/>
        </div>
    )
} 

