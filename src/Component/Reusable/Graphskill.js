import React from 'react'
import './style.css'
export const Graphskill = () => {
    const listskill = ["HTML", "CSS", "JQuery", "JavaScript", "SEO", "PHP", "WordPress", "React", "AJAX"]
    const listItems = listskill.map((list, index) =>
        <div className={`skilltitle skill__title-${index}`} style={{animation: 'skilltitlemove '+ index + 's ease-in-out'}}>
            <h3>{list}</h3>
        </div>
    );
   
    return (
        <>
            <div className='skills__outer'>
                <div className='skills-left'>
                    <img src="./images/hand-skill.png" alt="skills-sketch" />
                </div>
                <div className='skills-right'>
                    <div className='skillcircle'>
                        {listItems}
                    </div>
                </div>
            </div>

        </>
    )
}