import React from 'react'

const RunesPrimary = (props) => {
    const [chosenRune, setChosenRune] = React.useState('')

    let rPrimaries = [];
    for (let i = 1; i < 5; i++) {
        rPrimaries.push(i)
    }
    
    React.useEffect(() => {
        props.onChangeRune(chosenRune)
    }, [chosenRune, props])
    
    return (
        <div>
            <select onChange={(e) => {
                setChosenRune(e.target.value)
            }} name="r-primary" id="r-primary">
                <option value="">Escolha uma</option>
                {props.runes.map((rune) => <option key={rune}>{rune}</option>)}
            </select>
            {rPrimaries.map((rPrimary) => {
                return (
                    <select key={rPrimary} name={`r-p-${rPrimary}`} id={`r-p-${rPrimary}`} className="change-r-p">
                        <option value="">Escolha uma</option>
                        {rPrimary === 1 && props.rTFirst.map((rtf) => <option key={rtf} value={rtf}>{rtf}</option>)}
                        {rPrimary === 2 && props.rTSecond.map((rtf) => <option key={rtf} value={rtf}>{rtf}</option>)}
                        {rPrimary === 3 && props.rTThird.map((rtf) => <option key={rtf} value={rtf}>{rtf}</option>)}
                        {rPrimary === 4 && props.rTFourth.map((rtf) => <option key={rtf} value={rtf}>{rtf}</option>)}
                    </select>
            )})}
        </div>
    )
}

export default RunesPrimary
