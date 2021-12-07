import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: blue;
  }
`

function App() {
  return (
    <>
      <GlobalStyle>
        <div className="App">React Pizza</div>
      </GlobalStyle>
    </>
  )
}

export default App
