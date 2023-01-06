import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 65.5%;
    overflow-x: hidden;
  }

  body,
  input,
  button,
  textarea,
  select {
    font-family: 'Space Mono', monospace, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  
`

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
)
