import React from 'react'

const Skills = ({spellRanks, spells, onChangeLvl}) => {
    const [currLvls, setCurrLvls] = React.useState([0, 0, 0, 0]);
    const [value, setValue] = React.useState([0])
    
    function handleChangeLvl(e) {
        const select = Number(e.target.id);
        const numValue = (Number(e.target.value) - 1);
        setValue(numValue);
        
        return setCurrLvls((levels) => {
            levels[select] = numValue
            return levels;
        })
    }

    React.useEffect(() => {
        onChangeLvl(currLvls, value);
    }, [currLvls, onChangeLvl, value])
    
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
                <select id={index} onChange={handleChangeLvl}>
                    {levels && levels.map((rank, index) => <option key={index} value={rank}>{rank}</option>)}
                </select>
            </div>)})}
        </div>
    )
}

export default Skills
