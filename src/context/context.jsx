import React, { createContext, useEffect, useState } from 'react';
export const AS = createContext()
const Mode = (props) => {
    const [theme, setTheme] = useState(true)
    const [load, setLoad] = useState(true)
    const handleTheme = () => {
        setTheme(!theme)
    }
    useEffect(()=>{
        setTimeout(() => {
            setLoad(false)
        }, 2000);
    },[])
    return ( 
        <AS.Provider value={{
            handleTheme:handleTheme,
            theme:theme,
            load:load
        }}>
           {props.children}
        </AS.Provider>
     );
}
export default Mode;