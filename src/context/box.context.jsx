import React, { useState } from 'react'
import boxAPI from '../api_calls/boxAPI'


const BoxContext = React.createContext({
  listOfBoxes: [],
  boxSummary: {},
  fetchBoxDispatches: async () => Promise,
  dispatchNewBox: async () => Promise
})

export const BoxContextProvider = (props) => {

  const [listOfBoxes, setListOfBoxes] = useState(null)
  const [boxSummary, setBoxSummary] = useState({
    totalShippingCost: 0,
    totalWeight: 0,
    mostFrequentCountry: 0
  })

  async function fetchBoxDispatches() {
    let listOfBoxes = await boxAPI.fetchAllBoxDispatches()
    buildBoxSummaryObj(await listOfBoxes)
    setListOfBoxes(listOfBoxes)
  }

  async function dispatchNewBox(box) {
    setListOfBoxes(await boxAPI.dispatchNewBox(box))
  }

  function buildBoxSummaryObj(listOfBoxes) {

    let tempCost = 0
    let tempWeight = 0
    let tempListOfCountries = []

    listOfBoxes.forEach(box => {
      tempCost += box.shippingCost
      tempWeight += box.weight
      tempListOfCountries = [...tempListOfCountries, box.destinationCountry]
    })

    setBoxSummary({
      totalShippingCost: tempCost,
      totalWeight: tempWeight,
      mostFrequentCountry: findMostFrequentInArray(tempListOfCountries)
    })

    console.log(boxSummary)

  }

  function findMostFrequentInArray(array) {
    console.log(array)
    return Object.entries(
      array.reduce((a, v) => {
        a[v] = a[v] ? a[v] + 1 : 1
        return a
      }, {})
    ).reduce((a, v) => (v[1] >= a[1] ? v : a), [null, 0])[0]
  }

  return (
    <BoxContext.Provider
      value={{
        listOfBoxes: listOfBoxes,
        boxSummary: boxSummary,
        fetchBoxDispatches: fetchBoxDispatches,
        dispatchNewBox: dispatchNewBox
      }}>
      {props.children}
    </BoxContext.Provider>
  )
}

export default BoxContext