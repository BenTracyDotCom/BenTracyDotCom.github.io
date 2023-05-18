import { useEffect } from "react"

export default function StarsRater({ setAvgRating, form, setForm}) {

  form = form || {stars: "0"};
  setForm = setForm || (() => {});
  setAvgRating = setAvgRating || (() => {});


  const handleClick = (evt) => {
    setForm({...form, stars: evt.target.value})
    setAvgRating(parseInt(evt.target.value))
  }

  const starMeaning = {
    "0": "",
    "1": "Poor",
    "2": "Fair",
    "3": "Average",
    "4": "Good",
    "5": "Great!",
  }

  return (
    <div className="py-1" title="stars-rater">
      <span className="rating" >
        <input type="radio" name="rating-1" className="mask mask-star dark:bg-slate-200" value="1" onClick={handleClick}/>
        <input type="radio" name="rating-1" className="mask mask-star dark:bg-slate-200" value="2" onClick={handleClick}/>
        <input type="radio" name="rating-1" className="mask mask-star dark:bg-slate-200" value="3" onClick={handleClick}/>
        <input type="radio" name="rating-1" className="mask mask-star dark:bg-slate-200" value="4" onClick={handleClick}/>
        <input type="radio" name="rating-1" className="mask mask-star dark:bg-slate-200" value="5" onClick={handleClick}/>
      </span>
        {form.stars && <span className="pl-4 -mt-8 text-xl" value="0">{`${starMeaning[form.stars]}`}</span>}
    </div>
  )
}