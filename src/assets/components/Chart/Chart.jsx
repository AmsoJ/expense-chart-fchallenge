import './chart.scss';
// import data from './../../../assets/data/data.json';
import { useEffect } from 'react';
import { useGlobalContext } from '../../globalHook/globalHook';

// component bar
function Bar({day, amount, show, handleHover, handleHoverOut}) {
    return <div className="bar text-center d-flex flex-column justify-content-end">
        {show && <span className="price w-100 badge rounded-pill">
            {amount}
        </span>}
        <div className="bar-main my-1 rounded-2" style={{height: amount + "%"}} onMouseOver={handleHover} onMouseOut={handleHoverOut}></div>
        <p className="day">{day}</p>
    </div>
}

function Chart() {
    const {information, setInformation, showPrice, hidePrice} = useGlobalContext();
    // useGlobalEffect(data);

    useEffect(()=> {
        let t = setInterval(() => {
            setInformation(prevInfo => {
                return prevInfo.map(dataItem => {
                    let randomPercentage = Math.random() * 100;
                    return {...dataItem, amount: randomPercentage}
                })
            })
            // console.log("jose");
        }, 60000);
        return () => clearInterval(t);
    }, [setInformation]);

    return <div className="chart d-flex align-items-center justify-content-around">
        {information.map( (information, informationIndex)=> {
            return <Bar
                key={informationIndex}
                {...information}
                handleHoverOut = {() => hidePrice()}
                handleHover = {()=>showPrice(informationIndex)}
            />
        })}
    </div>
}

export default Chart;