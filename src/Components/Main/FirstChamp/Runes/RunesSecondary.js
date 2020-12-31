import React from 'react'

const RunesSecondary = () => {
    let rSecondaries = [];
    for (let i = 1; i < 3; i++) {
        rSecondaries.push(i)
    }
    return (
        <div>
            <select name="r-secondary" id="r-secondary">
                <option value="">Escolha uma</option>
            </select>
            {rSecondaries.map((rSecondary) => {
                return (
                    <select key={rSecondary} name={`r-s-${rSecondary}`} id={`r-s-${rSecondary}`} className="change-r-s">
                        <option value="">Escolha uma</option>
                    </select>
            )})}
        </div>
    )
}

export default RunesSecondary
