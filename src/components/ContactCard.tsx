export default function ContactCard() {

  return (
<div className="w-screen h-screen bg-gray-200 py-4" id="contact">
  <div className="container">
    <div className="bg-white rounded-lg shadow w-1/2 mx-auto py-3 md:flex md:px-4 lg:w-1/3 xl:w-1/4">
        <div className="mx-auto w-5/6 self-center md:mx-4">
            <img src="https://api.parliament.uk/photo/fF3bRokW.jpeg?crop=CU_1:1&width=400&quality=100" alt="lady" className="rounded-full block mx-auto" />
        </div>
        <div className="mt-3 mx-auto w-3/4 self-center">
            <p className="text-xl text-gray-800 tracking-wide leading-5 md:leading-6">Jane Doe</p>
            <p className="text-lg text-purple-500 tracking-wide leading-5 md:leading-6">Customer Support</p>
            <p className="text-sm text-gray-500 leading-5 md:leading-6">janedoe@example.com</p>
            <p className="text-sm text-gray-500 leading-5 md:leading-6">(555) 765-4321</p>
        </div>
    </div>
</div>
</div>
  )
}