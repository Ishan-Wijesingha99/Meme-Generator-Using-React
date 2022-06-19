import React from "react";


// challenge
export const ThingsComponent = function() {
    const thingsArray = ['thing 1', 'thing 2'];
    const thingsElements = thingsArray.map(element => <p>{element}</p>);

    const addThing = function() {
        thingsElements.push(<p>{`thing ${thingsArray.length + 1}`}</p>)
    }

    return (
        <div>
            <button onClick={addThing}>add thing</button>

            {thingsElements}
        </div>
    )
}