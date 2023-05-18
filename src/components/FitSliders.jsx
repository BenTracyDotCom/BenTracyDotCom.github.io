
import React from 'react'
import _ from 'underscore'
import FitSlider from './FitSlider.jsx'

export default function FitSliders({ rating }) {


  let characteristics = {
    "Quality": {
      "id": 14,
      "value": rating
    }
  }

  return (
    <div className="px-5 pb-10" title="fit-sliders">
    {characteristics && _.map(characteristics, (vals, char) => (
    <FitSlider fitChar={char} charId={vals.id} charVal={vals.value} key={vals.id}/>))}
    </div>
  )
}