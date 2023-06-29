import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
    // const addmobilemenu = () => {
    //     //const adddiv = "<div className='hamburg'><span>=</span></div>";
    //     const adddiv = document.createElement('p')
    //     document.getElementById("mainmenu").appendChild(adddiv);
    // }
    const mobilemenushow = () => {
        document.getElementById("mainmenu").classList.toggle("show")
    }
    const hidecheckmob = () => {
        document.getElementById("menucheck").checked = false
    }
    return ( 
        <>
        <div id='main__header'>
            <div className='header-back container'>
                <div className='header__wrap'>
                    <div className='logo'>
                    <Link to="/"><img src="./images/logo-latest.png" alt="logo"/></Link> 
                    </div>
                    
                    <div id="menuToggle" onClick={mobilemenushow}>
                    <input type="checkbox" id="menucheck"/>
                    <span></span>
                    <span></span>
                    <span></span>
                    <div id="mainmenu" className='menu'>
                        <ul onClick={hidecheckmob}>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                       
                    </div>
                    
                   
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Header