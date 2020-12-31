import React from 'react'
import ChampSelect from './ChampSelect/ChampSelect'
import Damage from './Damage/Damage'
import EnemyChamp from './EnemyChamp/EnemyChamp'
import FirstChamp from './FirstChamp/FirstChamp'

const Main = () => {
    return (
        <div>
            <ChampSelect/>
            <FirstChamp/>
            <EnemyChamp/>
            <Damage/>            
        </div>
    )
}

export default Main
