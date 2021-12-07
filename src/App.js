import React from 'react'
import { createGlobalStyle } from 'styled-components'

// components
import Navbar from './components/Navbar'
import { Banner } from './components/Banner'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
  }
  h1, h2, h3 {
    font-family: 'Righteous', cursive;
  }
`

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Banner />
      <div className="App">React Pizza</div>
    </>
  )
}

export default App
