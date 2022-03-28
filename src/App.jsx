import React, { useContext, useEffect, useState } from "react"
import { Routes, Route, Link } from "react-router-dom"

import './App.css'
import { DispatchNewBox } from "./views/DispatchNewBox"
import { ListOfBoxDispatches } from "./views/ListOfBoxDispatches"

function App() {
  return (
    <div className="App">

      <header className="header">
        <Link to="/"><button>Dispatch</button> </Link>
        <Link to="/box-dispatches"> <button>View dispatched boxes</button></Link>
      </header>

      <Routes>
        <Route path="/" element={<DispatchNewBox />} />
        <Route path="/box-dispatches" element={<ListOfBoxDispatches />} />
      </Routes>

    </div>
  )
}

export default App
