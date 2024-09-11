import React, { useState } from 'react'
import ThemeContext, { Theme } from './CreateContext'
import ShowResults from './ShowResults'

function App() {
  const [theme, setTheme] = useState<Theme>("dark")
  return (
    <ThemeContext.Provider value= {theme}>
      <ShowResults />  
    </ThemeContext.Provider>
  )
}

export default App
