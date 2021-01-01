import React from 'react'

const Skills = ({escolhido}) => {
    const [spells, setSpells] = React.useState([]);
    const [spellRanks, setSpellRanks] = React.useState([]);

    React.useEffect(() => {
        async function getSkills() {
            const url = `https://ddragon.leagueoflegends.com/cdn/10.22.1/data/pt_BR/champion/${escolhido}.json`;
            const response = await fetch(url);
            const result = await response.json();
            
            const spellList = result.data[escolhido].spells;

            let maxRanks = [];
            let maxRQ = [];
            let maxRW = [];
            let maxRE = [];
            let maxRR = [];

            for (const i in spellList) {
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
            
        }
        if (escolhido !== "") getSkills();
    }, [escolhido]);

    return (
        <div>
            {spells.map((spell, index) => {
                let levels = [];
                switch(index) {
                    case 0:
                        levels = spellRanks[0];
                        break;
                    case 1:
                        levels = spellRanks[1];
                        break;
                    case 2:
                        levels = spellRanks[2];
                        break;
                    case 3:
                        levels = spellRanks[3];
                        break;
                    default:
                }
            return (
            <div key={index} className="skill">
                <img src={`http://ddragon.leagueoflegends.com/cdn/10.22.1/img/spell/${spell.image.full}`} alt=""/>
                <select>
                    {levels && levels.map((rank, index) => <option key={index}>{rank}</option>)}
                </select>
            </div>)})}
        </div>
    )
}

export default Skills
