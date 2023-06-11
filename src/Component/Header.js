import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
    return ( 
        <>
        <div id='main__header'>
            <div className='header-back'>
                <div className='header__wrap'>
                    <div className='logo'>
                    <img src="./images/logo-latest.png" alt="logo"/>
                    </div>
                    <div className='menu'>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Header