
export default function hero() {
  return (
<div className="hero min-h-screen bg-[url('/src/images/blueridge.jpeg')]">
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Welcome!</h1>
      <p className="mb-5 text-2xl text-slate-200">My name is Ben Tracy. Come see what I've been working on!</p>
      <button className="btn bg-slate-700 border-2 border-slate-500">Get Started</button>
    </div>
  </div>
</div>
  )
}