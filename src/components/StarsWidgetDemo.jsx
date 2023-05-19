import React, { useState } from 'react';
import StarsWidget from './StarsWidget.jsx'

export default function StarsWidgetDemo({ avgRating, setAvgRating }){

  const[rating, setRating] = useState(0)

  const handleRating = (e) => {
    setRating(e.target.value)
    setAvgRating(e.target.value / 20)
  }

  return (
    <div className="my-2 w-min items-center">
      <StarsWidget rating={rating / 20}/>
      <input type="range" min="0" max="100" value={rating} className="range range-xs w-min mt-2 color-red-500" onChange={handleRating}/>
    </div>
  )
}