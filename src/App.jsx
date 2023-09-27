import React from 'react'
import Mode, { AS } from './context/context'
const App = () => {
  return (
    <Mode>
      <AS.Consumer>
        {(value)=>{
          return(
            <React.Fragment>
              <div className={
                  value.theme 
                  ? 'home home-light' 
                  : 'home home-dark'
                  }
                >
                <h1>Hello world</h1>
                <button onClick={value.handleTheme}>change Theme</button>
              </div>
            </React.Fragment>
          )
        }}
      </AS.Consumer>
    </Mode>
  )
}
export default App