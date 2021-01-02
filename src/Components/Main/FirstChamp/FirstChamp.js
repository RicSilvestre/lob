import React from 'react'
import Builds from './Builds/Builds'
import ChampPic from './ChampPic/ChampPic'
import Runes from './Runes/Runes'
import Skills from './Skills/Skills'
import Stats from './Stats/Stats';
import styles from './FirstChamp.module.css'

const FirstChamp = ({escolhido, spellRanks, spells, onChangeLvl}) => {

    return (
        <div className={styles.firstC}>
            <ChampPic escolhido={escolhido}/>
            <Runes/>
            <Builds/>
            <Stats/>           
            <Skills spellRanks={spellRanks} spells={spells} onChangeLvl={onChangeLvl}/>
        </div>
    )
}

export default FirstChamp
