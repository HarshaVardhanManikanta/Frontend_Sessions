import React from 'react';

function Greet(greetProps) {
    return (
        <div>
            <h1>Good Morning {greetProps.messageName}</h1>
        </div>
    );
}

export default Greet;