import React from 'react'
import Mode, { AS } from './context/context'
import { WindMillLoading } from 'react-loadingg';

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
                {value.load ? <div className="loading">
                  <WindMillLoading />
                </div> 
                : ""}
              </div>
            </React.Fragment>
          )
        }}
      </AS.Consumer>
    </Mode>
  )
}
export default App