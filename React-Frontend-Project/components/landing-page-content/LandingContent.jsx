import React from 'react';
import './styles.css'
function LandingContent(props) {
    return (
        <div className='container-fluid landing-styles d-flex flex-column align-items-center justify-content-center bg-secondary' style={{flex:'0 0 65%',height:'100%'}}>
            <img src="https://img.freepik.com/free-photo/labor-union-members-working-together_23-2150995044.jpg?ga=GA1.1.756776044.1736181565&semt=ais_hybrid" alt="workers-image" className='image-styles'/>
            <p className='h4 text-light px-3'>
            Welcome to <span className='text-dark h3'>City Assist</span>, a platform where citizens can easily voice their concerns about public amenities. 
            Share your complaints about issues like roads, parks, water supply, and more. Our goal is to ensure that your voice is heard by the authorities, helping create a better community for everyone. 
            Your feedback drives positive change!
            </p>
        </div>
    );
}

export default LandingContent;