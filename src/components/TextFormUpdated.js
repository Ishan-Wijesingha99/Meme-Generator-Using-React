import React from "react";



export const TextFormUpdated = function() {
    
    // create a state variable that is an object
    // whenever we need to change state of many things in a single functional component, it's best to create an object that has many properties which are changed as state changes
    const [memeObject, setMemeObject] = React.useState({
        topText: '',
        bottomText: '',
        randomImageURL: 'https://i.imgflip.com/gtj5t.jpg'
    })

    // create another state variable that at first is just an empty array
    const [allMemeImages, setAllMemeImages] = React.useState([]);

    // when the functional component is first rendered, this will execute, and whenever the randomImageURL is changed, this will execute
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(memeData => {
            setAllMemeImages(memeData.data.memes)            
        })
    }, [])

    // this function is executed every time the user clicks the "Get a new meme image" button, it retrieves a new meme image
    const getRandomMemeImage = function(e) {
        // prevent page reload
        e.preventDefault();
        
        // create random number between 0 and 99
        let randomNumber = Math.floor(Math.random() * allMemeImages.length);
        
        // change the memeObject, with all of it's properties the exact same, accept for the randomImageURL, which changes based off the random number
        setMemeObject(prevObject => {
            return {
                ...prevObject,
                randomImageURL: allMemeImages[randomNumber].url
            }
        })
    }

    // this function is executed everytime the input of topText and bottomText is changed, state is changed every keystroke
    const handleInputChange = function(event) {
        setMemeObject(prevObject => {
            return {
                ...prevObject,
                [event.target.name]: event.target.value
            }
        })
    }

    // log the meme object to the console so we can see that state is being updated constantly
    console.log(memeObject)

    // return JSX
    return (
        <div>
            <form className='entire-form'>

                <label className='labels' id='top-line-label'>
                    <input 
                        type='text'
                        placeholder='Top text'
                        name='topText'
                        value={memeObject.topText}
                        onChange={handleInputChange}
                    />
                </label>

                <label className='labels' id='bottom-line-label'>
                    <input 
                        type='text'
                        placeholder='Bottom text'
                        name='bottomText'
                        value={memeObject.bottomText}
                        onChange={handleInputChange}
                    />
                </label>

                <button
                    onClick={getRandomMemeImage}
                    id='get-new-meme-btn'
                    type='button'
                >
                    Get a new meme image
                </button>

            </form>

            <div className="meme-image-container">
                <h3 className="meme-text" id="white-top-text">{memeObject.topText}</h3>

                <img id='meme-image' src={memeObject.randomImageURL}/>
                
                <h3 className="meme-text" id="white-bottom-text">{memeObject.bottomText}</h3>
            </div>
        </div>
    )
}

