import React from 'react';
import styles from './Builds.module.css';

const Builds = () => {
    const [items, setItems] = React.useState([]);

    React.useEffect(() => {
        async function getItems() {
            const url = 'https://ddragon.leagueoflegends.com/cdn/10.24.1/data/pt_BR/item.json'
            const response = await fetch(url);
            const resultItems = await response.json();
            
            const nameItems = resultItems.data;
            let itemList = []

            for (const i in nameItems) {
                itemList.push(nameItems[i].name)
            }

            setItems(itemList);
        }
        getItems();    
    }, [])

    let builds = [];
    for (let i = 1; i < 7; i++) {
        builds.push(i)
    }

    return (
        <>
            <h2>Itens</h2>
            <div className={styles.builds}>                
                {builds.map((build => <select key={build} name={`build-${build}`} id={`build-${build}`}>
                    {items.map((item, index) => <option key={index} value={item}>{item}</option>)}
                </select>))}
            </div>
        </>
    )
}

export default Builds
