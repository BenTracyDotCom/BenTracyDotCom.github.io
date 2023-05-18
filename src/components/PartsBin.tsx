import StarsRater from "./StarsRater.jsx"
import StarsWidgetDemo from "./StarsWidgetDemo.jsx"

export default function PartsBin() {
  return (
    <div className="w-full flex flex-col items-center py-3">
      <div className="text-2xl">The Parts Bin</div>
      <p className="py-2">Here are some components I've built. Feel free to fiddle!</p>

      <div className="w-full grid">
        <div className="pb-3">Rate these components:</div>
        <StarsRater />
        <StarsWidgetDemo />
      </div>

    </div>
  )
}