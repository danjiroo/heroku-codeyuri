import React, { useState, useEffect } from 'react'

const Skill = ({skill, skillRate}) => {
    const [width, setWidth] = useState(window.innerWidth);
    const [resize, setResize] = useState(false);

    useEffect(() => {
        if ( width <= 600 ) {
            setResize(true)
        } else {
            setResize(false)
        }
        function handleResize() {
            setWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [width]);

    const progStyleWidth = {
        width: skillRate + '%'
    }

    const progStyleHeight = {
        height: skillRate + '%'
    }
    
    return (
        <div className="skillbar">
            <small>{skill}</small>
            <div className="bar">
                <div className="progress" style={ resize ? progStyleWidth : progStyleHeight }></div>
            </div>
        </div>
    )
}

export default Skill
