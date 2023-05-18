import { useState } from 'react'
import Hero from './components/hero'
import FullSizePhoto from './components/FullSizePhoto';
import Sidebar from './components/sidebar';
import PartsBin from './components/PartsBin';

function App() {
  const [photo, setPhoto] = useState('');

  return (
    <div className="flex relative">
      <FullSizePhoto src={photo} />
      <Sidebar />
      <div className="w-full">
        <Hero />
        <PartsBin />
      </div>

    </div>

  )
}

export default App
