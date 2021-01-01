import React from 'react'

const ChampPic = ({escolhido}) => {
    return (
        <>
            {escolhido !== "" && <img className="mini-pic" src={`https://ddragon.leagueoflegends.com/cdn/10.22.1/img/champion/${escolhido}.png`} alt="Mini-pic"/>}
            {escolhido !== "" && <img src={`https://ddragon.leagueoflegends.com/cdn/10.22.1/img/champion/${escolhido}.png`} alt="" className="champion-pic"hidden/>}
        </>
    )
}

export default ChampPic
