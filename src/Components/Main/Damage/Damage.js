import React from 'react'

const Damage = ({escolhido}) => {
    const [skillsDMG, setsSkillsDMG] = React.useState([]);

    React.useEffect(() => {
        async function getSkillsDMG() {
            const url = '../../../Database/skills.json';
            console.log(url);
            const response = await fetch(url);
            const result = await response.json();
            console.log(response);
        }
        getSkillsDMG();
    }, [escolhido])

    const sufix = ['aa', 'passive', 'Q', 'W', 'E', 'R']
    return (
        <div>
            <div className="dmg-name-row">
                <p>Dano/Fonte</p>
                <p>Auto-Ataque</p>
                <p id="skill-passive"></p>
                <p id="skill-Q"></p>
                <p id="skill-W"></p>
                <p id="skill-E"></p>
                <p id="skill-R"></p>
            </div>
            <div className="dmg-name-row">
                <p>Dano Base</p>
                {sufix.map((dmg) => <p key={dmg} id={`base-damage-${dmg}`}>{dmg}</p>)}
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
