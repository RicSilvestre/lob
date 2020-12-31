import React from 'react'

const ChampSelect = (props) => {
    const [champList, setChampList] = React.useState([]);
    const [chosen, setChosen] = React.useState('')

    React.useEffect(() => {
        async function getChampion() {
            const url = 'https://ddragon.leagueoflegends.com/cdn/10.22.1/data/pt_BR/champion.json'
            const response = await fetch(url);
            const result = await response.json();
            const nomes = result.data;
            
            let champs = []

            for (const i in nomes) {
                champs.push(i)
            }

            setChampList(champs)
        }

        getChampion()        
    }, [])

    React.useEffect(() => {
        props.onChangeChamp(chosen)
    }, [chosen, props])

    return (
        <div>
            <select id="champions" name="champions" onChange={(e) => setChosen(e.target.value)}>
                <option value="">Escolha seu campeão</option>
                {champList.map((champ) => <option key={champ} value={champ}>{champ}</option>)}
            </select>
        </div>
    )
}

export default ChampSelect
