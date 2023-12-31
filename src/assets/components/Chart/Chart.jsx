import './chart.scss';
import data from './../../../assets/data/data.json';
import { useGlobalContext } from '../../globalHook/globalHook';

// component bar
function Bar({day, amount, show, handleHover, handleHoverOut, maximus}) {
    return <div className="bar text-center d-flex flex-column justify-content-end">
        {show && <span className="price w-100 badge rounded-pill">
            {amount}
        </span>}
        
        <div className={`bar-main my-1 rounded-2 ${maximus}`} style={{height: amount + "%", transition: ".3s"}} onMouseOver={handleHover} onMouseOut={handleHoverOut}></div>
        <p className="day">{day}</p>
    </div>
}

function Chart() {
    const {information, useGlobalEffect, showPrice, hidePrice} = useGlobalContext();
    useGlobalEffect(data);
    return <div className="chart d-flex align-items-center justify-content-around">
        {information.map( (information, informationIndex, informationArr)=> {
            let classToShowMaximum = "null";
            let maximumPrice = Math.max(...informationArr.map(item => item.amount));
            information.amount === maximumPrice && (classToShowMaximum = "max");
            return <Bar
                key={informationIndex}
                {...information}
                handleHoverOut = {() => hidePrice()}
                handleHover = {()=>showPrice(informationIndex)}
                maximus={classToShowMaximum}
            />
        })}
    </div>
}

export default Chart;