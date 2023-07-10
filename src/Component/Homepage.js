import React from 'react'
import './style.css'
import Typed from 'typed.js';
import { Graphskill } from './Reusable/Graphskill';
import Dividerwave from './Reusable/Dividerwave';
import ContactForm from './Reusable/ContactForm';

function Homepage() {
    const typing = React.useRef(null);
    React.useEffect(() => {
        const typed = new Typed(typing.current, {
            strings: ['Website designer', 'Website Developer', 'Logo Designer', 'Banner Designer'],
            typeSpeed: 100,
            loop: true,
            showCursor: true,
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);
    const Theight = document.documentElement.clientHeight
    const Hskills = document.getElementById('allskills')
    console.log(Theight)
    console.log(Hskills)
    return (
        <>
            <section className='mainhero'>
                <div className='container'>
                    <div className='hero__inner flex__row flex__align-center flex__justify-center'>
                        <div className='hero__left'>
                            <h1>Hi! I am Gurpreet Kaur. I'm a passionate <span className='bgpink' ref={typing} /> </h1>
                        </div>
                        <div className='hero__right'>
                            <img src="./images/banner-kaur.png" alt="banner-main" />
                        </div>
                    </div>
                </div>
            </section>
            <Dividerwave />
            <section id='allskills' className='skills'>
                <div className='container'>
                    <div className='skill__wrap'>
                        <div className='maintitle'>
                            <h2>My Skills</h2>
                        </div>
                        <Graphskill />
                    </div>
                </div>
            </section>
            <div className='divider tb__space'><img src="./images/kw-divider.png" alt="divider" /></div>
            <section className='hm__contact bp__space'>
                <div className='container'>
                    <div className='maintitle'>
                        <h2>Get In Touch</h2>
                    </div>
                    <div className='hm__form tp__space'>
                        <ContactForm />
                    </div>
                </div>
                <div className='handemail'>
                <img src="./images/right-hand-email.png" alt="righthand"/>
            </div>
            </section>
           
            
        </>
    )
}

export default Homepage