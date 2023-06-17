import React from 'react'
import './style.css'
import Typed from 'typed.js';

function Homepage() {
    const typing = React.useRef(null);
    React.useEffect(() => {
        const typed = new Typed(typing.current, {
        strings: ['Website designer', 'Website Developer','Logo Designer', 'Banner Designer'],
        typeSpeed: 100,
        loop: true,
        showCursor: true,
        });

        return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
        };
    }, []);
    return (
        <>
            <section className='mainhero tb__space'>
                <div className='container'>
                    <div className='hero__inner'>
                        <div className='hero__left'>
                            <h1>Hi! I am Gurpreet Kaur. I'm a passionate <span className='bgpink' ref={typing} /> </h1>
                        </div>
                        <div className='hero__right'>
                            <img src="./images/banner-kaur.png" alt="banner-main"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Homepage