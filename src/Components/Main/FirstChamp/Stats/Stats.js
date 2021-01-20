import React from 'react';
import styles from './Stats.module.css';

const Stats = ({onChangeStat}) => {
    let levels = [];
    for (let i = 1; i < 19; i++) {
        levels.push(i)
    }

    return (
        <div className={styles.stats}>
            <h2>Nível</h2>
            <select name="nivelChamp" id="nivelChamp" onChange={e => onChangeStat(e.target.value)}>
                {levels.map((level) => <option key={level} value={level}>{level}</option> )}
            </select>
        </div>
    )
}

export default Stats
