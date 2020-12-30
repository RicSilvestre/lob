import React from 'react'
import Builds from './Builds/Builds'
import ChampPic from './ChampPic/ChampPic'
import Runes from './Runes/Runes'
import Skills from './Skills/Skills'
import Stats from './Stats/Stats'

const FirstChamp = () => {
    return (
        <div>
            <ChampPic/>
            <Runes/>
            <Builds/>
            <Stats/>           
            <Skills/>
        </div>
    )
}

export default FirstChamp
