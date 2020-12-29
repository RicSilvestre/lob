import React from 'react'
import Builds from './Builds/Builds'
import ChampSelect from './ChampSelect/ChampSelect'
import Runes from './Runes/Runes'
import Skills from './Skills/Skills'
import Stats from './Stats/Stats'

const FirstChamp = () => {
    return (
        <div>
            <ChampSelect/>
            <Runes/>
            <Builds/>
            <Stats/>           
            <Skills/>
        </div>
    )
}

export default FirstChamp
