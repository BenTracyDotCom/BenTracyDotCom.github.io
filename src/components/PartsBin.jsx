import React, { useState } from "react"
import StarsRater from "./StarsRater.jsx"
import StarsWidgetDemo from "./StarsWidgetDemo.jsx"
import FitSliders from "./FitSliders.jsx"
import MainAverage from "./MainAverage.jsx"
import Chat from "./Chat.jsx"

export default function PartsBin() {

  const [clickRating, setClickRating] = useState(0)
  const [sliderRating, setSliderRating] = useState(0)
  const [surprised, setSurprised] = useState(false)
  const [form, setForm] = useState({ stars: "0" })

  const handleSurprise = () => {
    setSurprised(surprised === true ? false : true)
  }

  const handlePortfolio = () => {
    document.getElementById('portfolio').scrollIntoView()
  }

  return (
    <div className="w-full flex flex-col items-center py-3 mx-5 w-[98%]" id="parts-bin">
      <div className="text-3xl font-bold text-teal-900">The Parts Bin</div>
      <div className="tooltip tooltip-bottom" data-tip="I've relied pretty heavily on the DaisyUI TaiwindCSS component library">
        <p className="pt-5 font-bold text-teal-900">Here are some components I've built. Feel free to fiddle around!</p>
        <div className="divider pb-2"></div>
      </div>
      <div className="w-full grid grid-cols-12">
        <div className="col-span-3">
          <div className="pb-5 pl-5 font-bold text-blue-900">Rate these components:</div>
          <div className="tooltip tooltip-top w-max pl-5 pb-5" data-tip="Click for responsive text!">
            <StarsRater avgRating={clickRating} setAvgRating={setClickRating} form={form} setForm={setForm} />
          </div><br />
          <div className="tooltip tooltip-right w-max pl-5 pb-5" data-tip="Slide for precise partial filling!">
            <StarsWidgetDemo avgRating={sliderRating} setAvgRating={setSliderRating} />
          </div>
          <div className="tooltip tooltip-top" data-tip="Try setting both review components to full!">
            <MainAverage avgReview={(clickRating + sliderRating) / 2} pctRecommended={(clickRating + sliderRating) / 2 === 5 ? 100 : 99.9} />
          </div>
          <div className="w-full tooltip tooltip-right" data-tip="Updates from average review">
            <FitSliders rating={(clickRating + sliderRating) / 2} />
          </div>
        </div>
        <div className="col-span-6">
          <div className="flex justify-center font-bold text-blue-900">
            Chat with this virtual host:
          </div>
          <Chat />
        </div>
        <div className="col-span-3 h-5/6">
          <div className="p-2 mr-5 flex justify-center font-bold text-blue-900">Click these buttons:</div>
          <div className="flex flex-col justify-around px-12 h-full py-10">
            <label htmlFor="new-review-modal" className="btn btn-warning">New review</label>
            <label htmlFor="search-modal" className="btn btn-accent">RC Parts</label>
            {surprised && <div className="tooltip tooltip-success w-32" data-tip="That was it. Not tryna give potential employers a heart attack or anything.">.</div>}
            <button className="btn btn-primary" onClick={handleSurprise}>Surprise</button>
            <button className="btn" onClick={handlePortfolio}>Portfolio</button>
          </div>
        </div>
      </div>
    </div>
  )
}