import React, { createContext, useState } from 'react';
export const AS = createContext()
const Mode = (props) => {
    const [theme, setTheme] = useState(true)
    const handleTheme = () => {
        setTheme(!theme)
    }
    return ( 
        <AS.Provider value={{
            handleTheme:handleTheme,
            theme:theme
        }}>
           {props.children}
        </AS.Provider>
     );
}
export default Mode;