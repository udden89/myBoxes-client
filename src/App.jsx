import React from "react"
import { Routes, Route, Link } from "react-router-dom"

import css from './App.module.css'
import { DispatchNewBox } from "./views/DispatchNewBox"
import { ListOfBoxDispatches } from "./views/ListOfBoxDispatches"

function App() {
  return (
    <div className="App">

      <header className={css.header}>
        <Link to="/addbox"><button>Dispatch a box</button> </Link>
        <Link to="/listboxes"> <button>View dispatched boxes</button></Link>
      </header>

      <Routes>
        <Route path="/addbox" element={<DispatchNewBox />} />
        <Route path="/listboxes" element={<ListOfBoxDispatches />} />
      </Routes>

    </div>
  )
}

export default App
