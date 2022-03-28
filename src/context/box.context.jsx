import React, { useState } from 'react'
import boxAPI from '../api/boxAPI'


const BoxContext = React.createContext({
  listOfBoxes: [],
  fetchBoxDispatches: async () => Promise,
  dispatchNewBox: async () => Promise
})

export const BoxContextProvider = (props) => {

  const [listOfBoxes, setListOfBoxes] = useState(null)

  const fetchBoxDispatches = async () => {
    setListOfBoxes(await boxAPI.fetchAllBoxDispatches())
  }

  const dispatchNewBox = async (box) => {
    setListOfBoxes(await boxAPI.dispatchNewBox(box))
  }

  return (
    <BoxContext.Provider
      value={{
        listOfBoxes: listOfBoxes,
        fetchBoxDispatches: fetchBoxDispatches,
        dispatchNewBox: dispatchNewBox
      }}>
      {props.children}
    </BoxContext.Provider>
  )
}

export default BoxContext