import React from 'react'
import ChampSelect from './ChampSelect/ChampSelect'
import Damage from './Damage/Damage'
import EnemyChamp from './EnemyChamp/EnemyChamp'
import FirstChamp from './FirstChamp/FirstChamp'

const Main = () => {
    const [escolhido, setEscolhido] = React.useState('');

    function handleChoice(chosen) {
        setEscolhido(chosen)
    }

    return (
        <div>
            <ChampSelect onChangeChamp={handleChoice}/>
            <FirstChamp escolhido={escolhido}/>
            <EnemyChamp/>
            <Damage escolhido={escolhido}/>            
        </div>
    )
}

export default Main
