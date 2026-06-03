import './App.css'
import { HashRouter, Route, Routes, Link } from "react-router-dom";
import Startseite from "./comp/Startseite.jsx"

function App() {

  return (
    <>
        <HashRouter>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Startseite />} />
          </Routes>
        </HashRouter>
    </>
  )
}

export default App
