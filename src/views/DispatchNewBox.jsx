import React, { useState, useContext } from 'react'

export const DispatchNewBox = () => {

  const [receiverName, setReceiverName] = useState("")
  const [boxWeight, setBoxWeight] = useState(0)
  const [boxColor, setBoxColor] = useState("")
  const [destinationCountry, setDestinationCountry] = useState("")

  const dispatch = async (e) => {
    e.preventDefault()
    const box = {}
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
        setBoxColor(e.target.value)
        break
      case "destinationCountry":
        setDestinationCountry(e.target.value)
        break
      default:
        break
    }
  }

  return (
    <div>
      <form className=''>
        <label > Name of the receiver:
          <input id='receiverName' type="text" onChange={handleChange} />
        </label>
        <label > Box weight:
          <input id='boxWeight' type="text" onChange={handleChange} />
        </label>
        <label > Box colour:
          <input id='boxColour' type="text" onChange={handleChange} />
        </label>
        <label > Destination country:
          <input id='destinationCountry' type="text" onChange={handleChange} />
        </label>
        <button className='btn' onClick={dispatch} >Dispatch</button>
      </form>
    </div>
  )
}
