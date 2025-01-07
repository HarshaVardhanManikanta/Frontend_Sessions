import React from 'react';

function CustomHeading({heading}) {
    return (
        <div>
            <h4 className='h4 text-primary mx-2 my-3'>{heading}</h4>
        </div>
    );
}

export default CustomHeading;