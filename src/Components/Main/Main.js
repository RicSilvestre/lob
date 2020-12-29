import React from 'react'
import Damage from './Damage/Damage'
import EnemyChamp from './EnemyChamp/EnemyChamp'
import FirstChamp from './FirstChamp/FirstChamp'

const Main = () => {
    return (
        <div>
            <FirstChamp/>
            <EnemyChamp/>
            <Damage/>            
        </div>
    )
}

export default Main
