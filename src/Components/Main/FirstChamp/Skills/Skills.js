import React from 'react'

const Skills = () => {
    const sufix = ["Q", "W", "E", "R"]
    return (
        <div>
            {sufix.map((letter) => {
            return (<div key={letter} className="skill">
                <img src="" alt="" id={`img-skill-${letter}`}/>
                <select name="nivel-Q" id="nivel-Q"></select>
            </div>)})}
        </div>
    )
}

export default Skills
