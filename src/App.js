import logo from './logo.svg'
// import axios from 'axios'
import './App.css'
import { CharacterCard, Home } from './components/index'
import { useEffect } from 'react'

// useEffect(() => {
//   setAppState({ loading: true })
//   const apiUrl = 'https://www.breakingbadapi.com/api/'
//   axios.get(apiUrl).then((repos) => {
//     const allRepos = repos.data
//     setAppState({ loading: false, repos: allRepos })
//   })
// }, [setAppState])

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home />
        {/* <CharacterCard /> */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Change <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
