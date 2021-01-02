import React from 'react';
import styles from './Damage.module.css'

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
        let dmgs = [];

        const skillMapped = skillsDMG.map((skill, index) => {
        let dmgQ = 0;
        let dmgW = 0;
        let dmgE = 0;
        let dmgR = 0;

        if (index === 0 && skill[0] !== undefined) {
            dmgQ = skill[0][currLvls2[0]];
            dmgs[0] = Number(dmgQ);
        }
        else if (index === 1 && skill[0] !== undefined) {
            dmgW = skill[0][currLvls2[1]];
            dmgs[1] = Number(dmgW);
        }
        else if (index === 2 && skill[0] !== undefined) {
            dmgE = skill[0][currLvls2[2]];
            dmgs[2] = Number(dmgE);
        }
        else if (index === 3 && skill[0] !== undefined) {
            dmgR = skill[0][currLvls2[3]];
            dmgs[3] = Number(dmgR);
        }
        return dmgs;
        })

        if (escolhido !== "") setDmgs(skillMapped[0]);
            
    }, [currLvls2, skillsDMG, valueDmg, escolhido])

    const sufix = ['aa', 'passive', 'Q', 'W', 'E', 'R']
    return (
        <div className={styles.dmgRows}>
            <div className={styles.dmgRow}>
                <p>Dano/Fonte</p>
                <p>Auto-Ataque</p>
                <p id="skill-passive">{passive}</p>
                {escolhido ? spellNames.map((spell) => <p key={spell}>{spell}</p>) : " "}
            </div>
            <div className={styles.dmgRow}>
                <p>Dano Base</p>
                <p>AA</p>
                <p>P</p>
                {dmgs && dmgs.map((dmg, index) => <p key={index}>{dmg}</p>)}
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
            <div className={styles.dmgRow}>
                <p>Dano total skill</p>
                {sufix.map((dmg) => <p key={dmg} id={`total-skill-${dmg}`}></p>)}
            </div>
            <div className={styles.dmgRow}>
                <p>Dano total combo</p>
                
            </div>
            <div className="dmg-hidden-row" hidden>
                <p>Dano sobre tempo restante</p>
                <p id="total-dps-dmg"></p>
            </div>
        </div>
    )
}

export default Damage
