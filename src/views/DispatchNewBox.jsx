import React, { useState, useContext } from 'react'
import BoxContext from '../context/box.context'
import { hexToRgb } from '../utils/utils'

import css from './dispatchNewBox.module.css'

export const DispatchNewBox = () => {

  const boxCTX = useContext(BoxContext)

  const [receiverName, setReceiverName] = useState("")
  const [boxWeight, setBoxWeight] = useState(0)
  const [boxColor, setBoxColor] = useState("#FFFFFF")
  const [destinationCountry, setDestinationCountry] = useState("sweden")

  async function dispatch(e) {
    e.preventDefault()

    if (checkIfColorIsblue(boxColor)) return

    const box = {
      receiver: receiverName,
      weight: boxWeight,
      color: JSON.stringify(hexToRgb(boxColor)),
      destinationCountry: destinationCountry.toUpperCase()
    }
    boxCTX.dispatchNewBox(box)
    resetForm()
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
        setBoxColor(event.target.value)
        break
      case "destinationCountry":
        setDestinationCountry(event.target.value)
        break
      default:
        break
    }
  }

  function checkIfColorIsblue() {
    let { r: red, g: green, b: blue } = hexToRgb(boxColor)

    if (blue >= green + red) {
      window.alert("Blue color not allowed, please pick another one.")
      return true
    }
    return false
  }

  function resetForm() {
    setReceiverName("")
    setBoxWeight(0)
    setBoxColor("#FFFFFF")
    setDestinationCountry("")
  }

  return (
    <div className={css.viewContainer}>
      <form className={css.boxForm} onSubmit={dispatch}>

        <label > Name of the receiver:</label>
        <input id='receiverName' type="text" onChange={handleChange} value={receiverName} required />
        <label > Box weight (kg):</label>
        <input id='boxWeight' type="number" onChange={handleChange} value={boxWeight} required min={1} />
        <label > Box colour:</label>
        <input id='boxColour' type="color" onChange={handleChange} value={boxColor} required />
        <label > Destination country:</label>

        {/* TODO HARD CODED DESTINATIONS -> SHOULD FETCH FROM API */}
        <select name="destinationCountry" id="destinationCountry" onChange={handleChange} value={destinationCountry.toUpperCase()} required >
          <option name="sweden"> SWEDEN</option>
          <option name="china"> CHINA</option>
          <option name="brazil"> BRAZIL</option>
          <option name="australia"> AUSTRALIA</option>
        </select>
        <input className={css.submitBtn} type="submit" value="Submit" />
      </form>
    </div>
  )
}
