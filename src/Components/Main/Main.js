import React from 'react'
import ChampSelect from './ChampSelect/ChampSelect'
import Damage from './Damage/Damage'
import EnemyChamp from './EnemyChamp/EnemyChamp'
import FirstChamp from './FirstChamp/FirstChamp'

const Main = () => {
    const [escolhido, setEscolhido] = React.useState('');
    const [spells, setSpells] = React.useState([]);
    const [spellRanks, setSpellRanks] = React.useState([]);
    const [spellNames, setSpellNames] = React.useState([]);
    const [currLvls2, setCurrLvls2] = React.useState([]);
    const [passive, setPassive] = React.useState('');
    const [value2, setValue2] = React.useState(0);

    React.useEffect(() => {
        async function getSkills() {
            const url = `https://ddragon.leagueoflegends.com/cdn/10.22.1/data/pt_BR/champion/${escolhido}.json`;
            const response = await fetch(url);
            const result = await response.json();
            
            const spellList = result.data[escolhido].spells;
            const passive = result.data[escolhido].passive.name;

            setPassive(passive);

            let maxRanks = [];
            let maxRQ = [];
            let maxRW = [];
            let maxRE = [];
            let maxRR = [];
            let sNames = [];

            for (const i in spellList) {
                sNames.push(spellList[i].name);
                
                for (let ix = 0; ix < spellList[i].maxrank; ix++) {
                    const numNivel = ix + 1;
                    
                    switch(i) {
                        case '0':
                            maxRQ.push(numNivel);
                            break;
                        case '1':
                            maxRW.push(numNivel);
                            break;
                        case '2':
                            maxRE.push(numNivel);
                            break
                        case '3':
                            maxRR.push(numNivel);
                            break
                        default:
                    }
                }
            }

            maxRanks.push(maxRQ);
            maxRanks.push(maxRW);
            maxRanks.push(maxRE);
            maxRanks.push(maxRR);

            setSpells(spellList);
            setSpellRanks(maxRanks);
            setSpellNames(sNames);
            
        }
        if (escolhido !== "") getSkills();
    }, [escolhido]);


    function handleChoice(chosen) {
        setEscolhido(chosen);
    }

    function onChangeLvl(levels, value) {
        setCurrLvls2(levels);
        setValue2(value);
    }

    return (
        <div>
            <ChampSelect onChangeChamp={handleChoice}/>
            <FirstChamp escolhido={escolhido} spellRanks={spellRanks} spells={spells} onChangeLvl={onChangeLvl}/>
            <EnemyChamp/>
            <Damage escolhido={escolhido} spellNames={spellNames} currLvls2={currLvls2} passive={passive} valueDmg={value2}/>            
        </div>
    )
}

export default Main
