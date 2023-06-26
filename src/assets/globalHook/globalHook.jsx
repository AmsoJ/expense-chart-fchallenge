import React, {useState, createContext, useEffect, useContext} from "react";

// create
const AppContext = createContext();

// provider
export const AppProvider = ({children}) => {
    let [information, setInformation] = useState([]);
    
    const showPrice = (index) => {
        setInformation(prevInformation => {
            return prevInformation.map((item, itemIndex) => {
                return itemIndex === index ? {...item, show: true} : {...item, show: false};
            })
        })
    }
    const hidePrice = () => {
        setInformation(prevInformation => {
            return prevInformation.map(item => {
                return {...item, show: false}
            })
        })
    }
    

    const useGlobalEffect = (importedFile) => {
        useEffect(()=>{
            setTimeout(() => {
                setInformation(importedFile);
            }, 3000);
        });
    }
    return <AppContext.Provider value={{
        information,
        setInformation,
        showPrice,
        hidePrice,
        useGlobalEffect
    }}>{children}</AppContext.Provider>
}

// customization
export const useGlobalContext = () => {

    return useContext(AppContext);
}