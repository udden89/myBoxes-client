import React, { useContext, useEffect, useState } from 'react'
import BoxContext from '../context/box.context'

export const ListOfBoxDispatches = () => {

  const boxAPI = useContext(BoxContext)

  const [listOfBoxes, setListOfBoxes] = useState([])

  useEffect(() => {

    const fetchListOfBoxes = async () => {

      boxAPI.fetchBoxDispatches()
      setListOfBoxes(boxAPI.listOfBoxes)
    }

    fetchListOfBoxes()

  }, [])

  return (
    <>
      {listOfBoxes &&
        listOfBoxes.map((ele, index) => {
          return (<div key={ele + index}>
            <h1>{ele.color}</h1>
          </div>)
        })
      }
    </>
  )
}
