export default function Portfolio(props: {
  setPhoto: React.Dispatch<React.SetStateAction<string>>
}) {

  const handleClick = () => {
    document.getElementById('contact')?.scrollIntoView()
  }

  const handlePhoto = (e: React.MouseEvent<HTMLImageElement>) => {
    props.setPhoto(e.currentTarget.src)
  }

  return (
    <div className="w-full flex flex-col items-center py-3 mx-5 w-[98%]" id="portfolio">
      <div className="text-3xl font-bold text-red-900">Portfolio</div>
      <p className="pt-5 font-bold text-red-900">Here are some examples of projects I've worked on. Click screenshots to expand!</p>
      <div className="divider pb-2 m-auto w-[49%]"></div>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        <div className="rounded overflow-hidden shadow-lg">
          <label htmlFor="fullsize-photo-modal"><img className="w-full" src="/assets/img/RR.png" alt="Ratings & Reviews Module" onClick={handlePhoto} /></label>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Everglades</div>
            <p className="text-gray-700 text-base">
              Everglades is a front-end business app for online retail. It was designed with simplicity and visual appeal in mind. The sleek, straight-forward, and user-friendly design of the website allows for easy access. I designed the Ratings & Reviews module which included a dynamic overview and responsive review tiles.
            </p>
            <div className="px-6 pt-4 pb-2 flex justify-center">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><a href="https://github.com/Team-Everglades/project-atelier" target="_blank">Github</a></span>
            </div>
          </div>
        </div>
        <div className="rounded overflow-hidden shadow-lg">
          <label htmlFor="fullsize-photo-modal"><img className="w-full" src="/assets/img/weReWolf.png" alt="We'reWolf" onClick={handlePhoto} /></label>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">We'reWolf</div>
            <p className="text-gray-700 text-base">
              I was the architectural lead on a team of six to create this NextJS-based serverless multiplayer game. I oversaw all technical challenges and connections from login to victory screen and built the chat function which limits visibility based on player role.
            </p>
            <div className="px-6 pt-4 pb-2 flex justify-center">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><a href="https://github.com/Emerald-Team/We-reWolf" target="_blank">Github</a></span>
            </div>
          </div>
        </div>
        <div className="rounded overflow-hidden shadow-lg">
          <label htmlFor="fullsize-photo-modal"><img className="w-full" src="/assets/img/RCPartPicker.jpg" alt="RC Part Picker" onClick={handlePhoto} /></label>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">RC Part Picker</div>
            <p className="text-gray-700 text-base">
              The goal of RC Part Picker is to create an on-ramp for aspiring RC plane hobbyists by allowing them to dream realistically. This app allows users to store several build ideas, track part prices and orders, and provides part compatibility validation in case the user just doesn't know what questions to ask.
            </p>
            <div className="px-6 pt-4 pb-2 flex justify-center">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><a href="https://www.github.com/BenTracyDotCom/RCPartPicker" target="_blank">Github</a></span>
            </div>
          </div>
        </div>
      </div>
      <div className="divider pb-2"></div>
    </div>
  )
}