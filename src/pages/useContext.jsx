import React from 'react'
import HomeContainer from '../src/pages/HomeContainer.jsx'

export const ThemeContainer = React.createContext("vaish")
function App() {
  return (
    <div>
      <ThemeContainer.Provider value={"VAishu"}>
      <HomeContainer/>
      </ThemeContainer.Provider>
    </div>
  )
}

export default App