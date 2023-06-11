import React from 'react'
import './style.css'

function Homepage({getheightval}) {
    return (
        <>
            <section id='homeSection' onLoad={getheightval} style={{backgroundImage: "url(/images/watch-dev.jpg)"}}>
                {/* <div className='mainlogo'><img src="./images/logo-latest.png" alt="logo" /></div> */}
                
            </section>
            <div className='bannercontent'>
                <h1 className='textcenter'>Welcome in Kaur's Website</h1>
                <h2 className='textcenter'>Under Construction.</h2>
            </div>
        </>
    )
}

export default Homepage