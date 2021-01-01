import React from 'react';
import RunesPrimary from './RunesPrimary';
import RunesSecondary from './RunesSecondary';

const Runes = () => {
    const [runes, setRunes] = React.useState([]);
    const [pRune, setPRune] = React.useState('');
    const [sRune, setSRune] = React.useState('');
    const [FMR, setFMR] = React.useState('');
    const [SMR, setSMR] = React.useState('');
    const [FMRSubtr, setFMRSubtr] = React.useState('');
    const [SMRSubtr, setSMRSubtr] = React.useState('');
    const [rTrees, setRTrees] = React.useState([]);
    const [rTFirst, setRTFirst] = React.useState([]);
    const [rTSecond, setRTSecond] = React.useState([]);
    const [rTThird, setRTThird] = React.useState([]);
    const [rTFourth, setRTFourth] = React.useState([]);
    const [minorRunes, setMinorRunes] = React.useState([]);

    React.useEffect(() => {
        async function runesCore() {
            const url = 'https://ddragon.leagueoflegends.com/cdn/10.22.1/data/pt_BR/runesReforged.json'
            const response = await fetch(url);
            const resultRunes = await response.json();

            let runeList = []
            let rTList = []

            for (const i in resultRunes) {
                runeList.push(resultRunes[i].name);
            }

            rTList.push(resultRunes)

            setRunes(runeList);
            setRTrees(rTList);
        }

        runesCore();
        
    }, []);

    React.useEffect(() => {
        let rtf = [];
        let rts = [];
        let rtt = [];
        let rto = [];
        const rTreesX = rTrees[0];
        for (const i in rTreesX) {
            if (rTreesX[i].name === pRune) {
                const rTrees2 = rTreesX[i].slots;

                for (const ix in rTrees2) {
                    const rTrees3 = rTrees2[ix].runes                    

                    for (const ind in rTrees3) {
                        const currRune = rTrees3[ind].name

                        if (ix === "0") {                            
                            rtf.push(currRune);
                        } else if (ix === "1") {
                            rts.push(currRune);
                        } else if (ix === "2") {
                            rtt.push(currRune);
                        } else if (ix === "3") {
                            rto.push(currRune);
                        }

                        
                    }
                }
            }
        }

        setRTFirst(rtf);
        setRTSecond(rts);
        setRTThird(rtt);
        setRTFourth(rto);

    }, [pRune, rTrees]);

    React.useEffect(() => {
        let mr = [];
        const rTreesX = rTrees[0];
        for (const i in rTreesX) {
            if (rTreesX[i].name === sRune) {
                const rTrees2 = rTreesX[i].slots;

                for (const ix in rTrees2) {
                    const rTrees3 = rTrees2[ix].runes                    

                    for (const ind in rTrees3) {
                        const currRune = rTrees3[ind].name

                        if (ix !== "0") {                            
                            mr.push(currRune);
                        }
                    }
                }
            }
        }

        setMinorRunes(mr);
    }, [rTrees, sRune]);

    React.useEffect(() => {
        const rTreesX = rTrees[0];
        let wrongIx = '';
        let smrSub = [];
        for (const i in rTreesX) {
            if (rTreesX[i].name === sRune) {
                const rTrees2 = rTreesX[i].slots;

                for (const ix in rTrees2) {
                    const rTrees3 = rTrees2[ix].runes                    

                    for (const ind in rTrees3) {
                        const currRune = rTrees3[ind].name

                        if (currRune === FMR) {                            
                            wrongIx = ix
                        }
                    }

                    if (ix !== wrongIx && ix !== "0") {
                        
                        for (const inx in rTrees3) {
                            const currRune2 = rTrees3[inx].name
                            smrSub.push(currRune2);
                        }
                    }
                }
            }
        }
        setSMRSubtr(smrSub);
    }, [FMR, rTrees, sRune])

    React.useEffect(() => {
        const rTreesX = rTrees[0];
        let wrongIx = '';
        let smrSub = [];
        for (const i in rTreesX) {
            if (rTreesX[i].name === sRune) {
                const rTrees2 = rTreesX[i].slots;

                for (const ix in rTrees2) {
                    const rTrees3 = rTrees2[ix].runes                    

                    for (const ind in rTrees3) {
                        const currRune = rTrees3[ind].name

                        if (currRune === SMR) {                            
                            wrongIx = ix
                        }
                    }

                    if (ix !== wrongIx && ix !== "0") {
                        
                        for (const inx in rTrees3) {
                            const currRune2 = rTrees3[inx].name
                            smrSub.push(currRune2);
                        }
                    }
                }
            }
        }
        setFMRSubtr(smrSub);
    }, [SMR, rTrees, sRune])

    function handleRune(sRune) {
        if (runes) {
            setPRune(sRune)
        }
    };

    function handleSRune(sRune) {
        if (runes) {
            setSRune(sRune)
        }
    };

    function handleFM(mRune) {
        setFMR(mRune)
    }

    function handleSM(mRune) {
        setSMR(mRune)
    }

    return (
        <div>
            <h2>Runas</h2>
            <RunesPrimary runes={runes} onChangeRune={handleRune} rTFirst={rTFirst} rTSecond={rTSecond} rTThird={rTThird} rTFourth={rTFourth}/>
            <RunesSecondary runes={runes} pRune={pRune} minorRunes={minorRunes} onChangeSRune={handleSRune} onChangeFM={handleFM} onChangeSM={handleSM} SMRSubtr={SMRSubtr} FMRSubtr={FMRSubtr}/>
        </div>
    )
}

export default Runes
