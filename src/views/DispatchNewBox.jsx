import React, { useState, useContext } from 'react'
import BoxContext from '../context/box.context'

export const DispatchNewBox = () => {

  const boxAPI = useContext(BoxContext)

  const [receiverName, setReceiverName] = useState("")
  const [boxWeight, setBoxWeight] = useState(0)
  const [boxColor, setBoxColor] = useState("")
  const [destinationCountry, setDestinationCountry] = useState("")

  const dispatch = async (e) => {
    e.preventDefault()
    const box = {
      receiver: receiverName,
      weight: boxWeight,
      color: boxColor,
      destinationCountry: destinationCountry
    }
    boxAPI.dispatchNewBox(box)
  }

  const handleChange = (e) => {
    switch (e.target.id) {
      case "receiverName":
        setReceiverName(e.target.value)
        break
      case "boxWeight":
        setBoxWeight(e.target.value)
        break
      case "boxColour":
        setBoxColor(hexToRgb(e.target.value))
        break
      case "destinationCountry":
        setDestinationCountry(e.target.value)
        break
      default:
        break
    }
  }

  function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null
  }

  return (
    <div>
      <form className=''>
        <label > Name of the receiver:
          <input id='receiverName' type="text" onChange={handleChange} />
        </label>
        <label > Box weight:
          <input id='boxWeight' type="number" onChange={handleChange} />
        </label>
        <label > Box colour:
          <input id='boxColour' type="color" onChange={handleChange} />
        </label>
        <label > Destination country:
          <input id='destinationCountry' type="text" onChange={handleChange} />
        </label>
        <button className='btn' onClick={dispatch} >Dispatch</button>
      </form>
      {console.log(boxColor)}
    </div>
  )
}
