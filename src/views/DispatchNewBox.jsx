import React, { useState, useContext } from 'react'
import BoxContext from '../context/box.context'
import { hexToRgb } from '../utils/utils'

import css from './dispatchNewBox.module.css'

export const DispatchNewBox = () => {

  const boxAPI = useContext(BoxContext)

  const [receiverName, setReceiverName] = useState("Mac")
  const [boxWeight, setBoxWeight] = useState(2)
  const [boxColor, setBoxColor] = useState("")
  const [destinationCountry, setDestinationCountry] = useState("sweden")

  async function dispatch(e) {
    e.preventDefault()
    const box = {
      receiver: receiverName,
      weight: boxWeight,
      color: JSON.stringify(boxColor),
      destinationCountry: destinationCountry
    }
    console.log("BOX:", box)
    boxAPI.dispatchNewBox(box)
  }

  function handleChange(event) {
    switch (event.target.id) {
      case "receiverName":
        setReceiverName(event.target.value)
        break
      case "boxWeight":
        setBoxWeight(event.target.value)
        break
      case "boxColour":
        setBoxColor(hexToRgb(event.target.value))
        break
      case "destinationCountry":
        setDestinationCountry(event.target.value)
        break
      default:
        break
    }
  }

  return (
    <div className={css.viewContainer}>
      <form className={css.boxForm} onSubmit={dispatch}>
        <label > Name of the receiver:</label>
        <input id='receiverName' type="text" onChange={handleChange} value={receiverName} />
        <label > Box weight (kg):</label>
        <input id='boxWeight' type="number" onChange={handleChange} value={boxWeight} />
        <label > Box colour:</label>
        <input id='boxColour' type="color" onChange={handleChange} />
        <label > Destination country:</label>
        <input id='destinationCountry' type="text" onChange={handleChange} value={destinationCountry.toUpperCase()} />
        <input type="submit" value="Submit" />
        {/* <button className='btn' onClick={dispatch} >Dispatch</button> */}
      </form>
    </div>
  )
}
