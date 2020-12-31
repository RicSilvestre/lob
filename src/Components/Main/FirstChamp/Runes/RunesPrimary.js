import React from 'react'

const RunesPrimary = () => {
    let rPrimaries = [];
    for (let i = 1; i < 5; i++) {
        rPrimaries.push(i)
    }
    
    return (
        <div>
            <select name="r-primary" id="r-primary">
                <option value="">Escolha uma</option>
            </select>
            {rPrimaries.map((rPrimary) => {
                return (
                    <select key={rPrimary} name={`r-p-${rPrimary}`} id={`r-p-${rPrimary}`} className="change-r-p">
                        <option value="">Escolha uma</option>
                    </select>
            )})}
        </div>
    )
}

export default RunesPrimary
