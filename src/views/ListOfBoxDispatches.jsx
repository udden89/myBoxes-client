import React, { useContext, useEffect, useState } from 'react'
import BoxContext from '../context/box.context'
import { rgbToHex } from '../utils/utils'

import css from './listOfBoxDispatches.module.css'

export const ListOfBoxDispatches = () => {

  const boxCTX = useContext(BoxContext)
  const listOfBoxes = boxCTX.listOfBoxes
  const boxSummary = boxCTX.boxSummary

  useEffect(() => {

    async function fetchListOfBoxes() {
      await boxCTX.fetchBoxDispatches()
    }

    fetchListOfBoxes()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function parseJsonIntoHexColor(stringObj) {
    let myobj = JSON.parse(stringObj)
    return rgbToHex(myobj)
  }

  return (
    <>
      <div className={css.listOfBoxView}>
        <div className={css.boxShippingCardContainer} style={{ backgroundColor: "#edd6a5" }} >
          <div className={css.boxShippingCard} style={{ backgroundColor: "#edd6a5" }} >
            <h1>TOTAL</h1>

            <div className={css.detailedInfo}>
              <span><p>Total Weight:</p><h2>{boxSummary.totalWeight}</h2></span>
              <span><p>Most Destination arrivals:</p><h2>{boxSummary.mostFrequentCountry}</h2></span>
              <span><p>Total shipping cost:</p><h2>{boxSummary.totalShippingCost.toFixed(2)}</h2><p>SEK</p></span>
            </div>

          </div>
        </div>
        {listOfBoxes &&
          listOfBoxes.map((box, index) => {
            return (

              <div className={css.boxShippingCardContainer} key={box + index}
                style={{ backgroundColor: parseJsonIntoHexColor(box.color) }}>

                <div className={css.boxShippingCard} >
                  <span><p>Reciver:</p><h1> {box.receiver} </h1></span>

                  <div className={css.detailedInfo}>
                    <span><p>Weight:</p><h2>{box.weight}</h2></span>
                    <span><p>Destination country:</p><h2>{box.destinationCountry}</h2></span>
                    <span><p>Shipping cost:</p><h2>{box.shippingCost}</h2><p>SEK</p></span>
                  </div>

                </div>

              </div>
            )
          })
        }
      </div>
    </>
  )
}
