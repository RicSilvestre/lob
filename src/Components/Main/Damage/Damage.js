import React from 'react'

const Damage = ({escolhido, spellNames, passive, currLvls2, valueDmg}) => {
    const [skillsDMG, setSkillsDMG] = React.useState([]);
    const [dmgs, setDmgs] = React.useState([]);

    React.useEffect(() => {
        async function getSkillsDMG() {
            const url = 'https://raw.githubusercontent.com/RicSilvestre/lob/master/src/Database/skills.json';
            const response = await fetch(url);
            const result = await response.json();
            let skillDmg = []
            
            for (const i of result) {
                if (Object.keys(i)[0] === escolhido) {
                    skillDmg = i[escolhido].dmg;                    
                }
            }

            setSkillsDMG(skillDmg);            
        }
        if (escolhido !== "") getSkillsDMG();
        
    }, [escolhido, currLvls2]);

    React.useEffect(() => {

        const skillMapped = skillsDMG.map((skill, index) => {
        let dmgQ = 0;
        let dmgW = 0;
        let dmgE = 0;
        let dmgR = 0;
        let dmgs = [];

        console.log(currLvls2)

        if (index === 0) {
            dmgQ = skill[0][currLvls2[0]];
            dmgs[0] = dmgQ
        }
        else if (index === 1) {
            dmgW = skill[0][currLvls2[1]];
            dmgs[1] = dmgW;
        }
        else if (index === 2) {
            dmgE = skill[0][currLvls2[2]];
            dmgs[2] = dmgE;
        }
        else if (index === 3) {
            dmgR = skill[0][currLvls2[3]];
            dmgs[3] = dmgR;
        }
        return dmgs;
        })

        setDmgs(skillMapped)
        
    }, [currLvls2, skillsDMG, valueDmg])

    const sufix = ['aa', 'passive', 'Q', 'W', 'E', 'R']
    return (
        <div>
            <div className="dmg-name-row">
                <p>Dano/Fonte</p>
                <p>Auto-Ataque</p>
                <p id="skill-passive">{passive}</p>
                {spellNames.map((spell) => <p key={spell}>{spell}</p>)}
            </div>
            <div className="dmg-name-row">
                <p>Dano Base</p>
                {(escolhido !== "") && dmgs.map((dmg, index) => <p key={index}>{dmg[index]}</p>)}
            </div>
            <div className="dmg-hidden-row" hidden>
                <p>Dano Lich</p>
                <p id="lich-dmg-aa"></p>
            </div>
            <div className="dmg-hidden-row" hidden>
                <p>Dano tique Liandry</p>
                {sufix.map((dmg) => <p key={dmg} id={`liandry-tk-${dmg}`}>{dmg}</p>)}
            </div>
            <div className="dmg-hidden-row" hidden>
                <p>Dano total Liandry</p>
                {sufix.map((dmg) => <p key={dmg} id={`liandry-total-${dmg}`}>{dmg}</p>)}
            </div>
            <div className="dmg-hidden-row" hidden>
                <p>Dano runas *</p>
                {sufix.map((dmg) => <p key={dmg} id={`rune-${dmg}`}>{dmg}</p>)}
            </div>
            <div className="dmg-name-row">
                <p>Dano total skill</p>
                {sufix.map((dmg) => <p key={dmg} id={`total-skill-${dmg}`}>{dmg}</p>)}
            </div>
            <div className="dmg-name-row">
                <p>Dano total combo</p>
                <p id="total-dmg"></p>
            </div>
            <div className="dmg-hidden-row" hidden>
                <p>Dano sobre tempo restante</p>
                <p id="total-dps-dmg"></p>
            </div>
        </div>
    )
}

export default Damage
