import React, { useState } from "react"
import StarsRater from "./StarsRater.jsx"
import StarsWidgetDemo from "./StarsWidgetDemo.jsx"
import FitSliders from "./FitSliders.jsx"
import MainAverage from "./MainAverage.jsx"

export default function PartsBin() {

  const [clickRating, setClickRating] = useState(0)
  const [sliderRating, setSliderRating] = useState(0)
  const [surprised, setSurprised] = useState(false)
  const [form, setForm] = useState({stars: "0"})

  const handleSurprise = () => {
    setSurprised(surprised === true ? false : true)
  }

  return (
    <div className="w-full flex flex-col items-center py-3">
      <div className="text-2xl">The Parts Bin</div>
      <div className="tooltip tooltip-bottom" data-tip="I've relied pretty heavily on the DaisyUI TaiwindCSS component library">
        <p className="py-2">Here are some components I've built. Feel free to fiddle!</p>
      </div>

      <div className="w-full grid grid-cols-12">
        <div className="col-span-3">
          <div className="pb-3">Rate these components:</div>
          <div className="tooltip tooltip-top w-max pl-5" data-tip="Responsive text!">
            <StarsRater avgRating={clickRating} setAvgRating={setClickRating} form={form} setForm={setForm}/>
          </div>
          <div className="tooltip tooltip-right w-max pl-5" data-tip="Precise partial filling!">
            <StarsWidgetDemo avgRating={sliderRating} setAvgRating={setSliderRating} />
          </div>
          <div className="tooltip tooltip-top" data-tip="Try setting both review components to full!">
            <MainAverage avgReview={(clickRating + sliderRating) / 2} pctRecommended={(clickRating + sliderRating) / 2 === 5 ? 100 : 99.9} />
          </div>
          <div className="w-64 tooltip tooltip-right w-min" data-tip="Updates from average review">
            <FitSliders rating={(clickRating + sliderRating) / 2} />
          </div>
        </div>
        <div className="col-span-6 border-2 border-teal-500">
          Chat Goes Here
        </div>
        <div className="col-span-3">
         <div className="p-2 mr-5">I  ❤️  buttons</div>
          <div className="flex flex-col  justify-around px-12 h-full py-10">
            <label htmlFor="new-review-modal" className="btn btn-warning">New review</label>
            <label htmlFor="search-modal" className="btn btn-accent">RC Parts</label>
            {surprised && <div className="tooltip tooltip-success" data-tip="That was it. Not tryna give potential employers a heart attack or anything.">.</div>}
            <button className="btn" onClick={handleSurprise}>Surprise</button>
          </div>
        </div>
      </div>
    </div>
  )
}