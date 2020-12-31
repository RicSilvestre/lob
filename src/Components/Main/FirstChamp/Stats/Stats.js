import React from 'react'

const Stats = () => {
    let levels = [];
    for (let i = 1; i < 19; i++) {
        levels.push(i)
    }

    return (
        <div>
            <select name="nivelChamp" id="nivelChamp">
                {levels.map((level) => <option key={level} value={level}>{level}</option> )}
            </select>
        </div>
    )
}

export default Stats
