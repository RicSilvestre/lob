import React from 'react'

const Builds = () => {
    let builds = [];
    for (let i = 1; i < 7; i++) {
        builds.push(i)
    }

    return (
        <div>
            <h2>Itens</h2>
            {builds.map((build => <select key={build} name={`build-${build}`} id={`build-${build}`}></select>))}
        </div>
    )
}

export default Builds
