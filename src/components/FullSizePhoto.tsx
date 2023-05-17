export default function FullSizePhoto(props: {src: string}) {

  return (
      <div className="h-min border-0">
        <input type="checkbox" id="fullsize-photo-modal" className="modal-toggle" />
          <div className="modal p-5 border-0">
            <div className="modal-box max-w-none max-h-full h-min w-max p-0 m-0 border-0 scrollbar-hide overflow-x-auto ">
          <label htmlFor="fullsize-photo-modal" className="">
          <img src={props.src} alt="Review Photo" className="rounded-lg review-photo" />
          </label>
            </div>
          </div>
      </div>
  )
}