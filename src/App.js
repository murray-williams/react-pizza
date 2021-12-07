import React from 'react'
import { createGlobalStyle } from 'styled-components'

// components
import Navbar from './components/Navbar'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
  }
  h1, h2, h3 {
    font-family: 'Righteous', cursive;
  }
`

function App() {
  return (
    <>
      <Navbar />
      <h1>Sliceline</h1>
      <GlobalStyle />
      <div className="App">React Pizza</div>
    </>
  )
}

export default App
