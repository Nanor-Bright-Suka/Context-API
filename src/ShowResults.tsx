import React from 'react'
import { useContext } from 'react'
import ThemeContext, { Theme } from './CreateContext'



function ShowResults() {
    const useGetTheme = () => useContext<Theme>(ThemeContext)
    const theme = useGetTheme()
    
  return (
    <div>
      <h1>Current Theme: {theme}</h1>
    </div>
  )
}

export default ShowResults
