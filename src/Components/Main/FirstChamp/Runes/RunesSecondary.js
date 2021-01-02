import React from 'react';
import styles from './Runes.module.css';

const RunesSecondary = ({runes, pRune, minorRunes, onChangeSRune, onChangeSM, onChangeFM, FMRSubtr, SMRSubtr}) => {
    const [fChoice, setFChoice] = React.useState('');
    const [sChoice, setSChoice] = React.useState('');
    const [chosenSRune, setchosenSRune] = React.useState('');

    React.useEffect(() => {
        onChangeSRune(chosenSRune)
    }, [chosenSRune, onChangeSRune])

    React.useEffect(() => {
        onChangeFM(fChoice)
    }, [onChangeFM, fChoice])

    React.useEffect(() => {
        onChangeSM(sChoice)
    }, [onChangeSM, sChoice])

    return (
        <div className={styles.runasS}>
            <select onChange={(e) => setchosenSRune(e.target.value) } name="r-secondary" id="r-secondary">
                <option value="">Escolha uma</option>
                {runes.map((rune) => rune !== pRune && <option key={rune} value={rune}>{rune}</option>)}
            </select>
            <select onChange={(e) => setFChoice(e.target.value)} name="r-s-1" id="r-s-1" className="change-r-s">
                <option value="">Escolha uma</option>
                {FMRSubtr ? FMRSubtr.map((mR) => <option key={mR} value={mR}>{mR}</option> ) : minorRunes.map((mR) => <option key={mR} value={mR}>{mR}</option>)}
            </select>
            <select onChange={(e) => setSChoice(e.target.value)} name="r-s-2" id="r-s-2" className="change-r-s">
                <option value="">Escolha uma</option>
                {SMRSubtr ? SMRSubtr.map((mR) => <option key={mR} value={mR}>{mR}</option> ) : minorRunes.map((mR) => <option key={mR} value={mR}>{mR}</option>)}
            </select>
        </div>
    )
}

export default RunesSecondary
