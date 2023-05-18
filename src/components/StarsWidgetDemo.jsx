import React, { useState } from 'React';
import StarsWidget from './StarsWidget.jsx'

export default function StarsWidgetDemo(){

  const[rating, setRating] = useState(0)

  const handleRating = (e) => {
    setRating(e.target.value)
  }

  return (
    <div className="my-2 border-2 border-red-500 w-min items-center">
      <StarsWidget rating={rating / 20}/>
      <input type="range" min="0" max="100" className="range range-xs w-min mt-2" onChange={handleRating}/>
    </div>
  )
}