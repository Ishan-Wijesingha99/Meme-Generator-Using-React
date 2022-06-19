import React from 'react';



export const TextForm = function() {
    return (
        <form className='entire-form'>

            <label className='labels' id='top-line-label'>
                <input type='text' placeholder='Top text'/>
            </label>

            <label className='labels' id='bottom-line-label'>
                <input type='text' placeholder='Bottom text'/>
            </label>

            <button id='get-new-meme-btn'>Get a new meme image</button>

        </form>
    )
} 