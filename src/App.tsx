import { useState } from 'react'
import Hero from './components/Hero'
import FullSizePhoto from './components/FullSizePhoto';
import Sidebar from './components/Sidebar';
import PartsBin from './components/PartsBin';
import Portfolio from './components/Portfolio';
import SearchModal from './components/search/SearchModal';

function App() {
  const [photo, setPhoto] = useState('');

  return (
    <div className="flex relative">
      <SearchModal />
      <FullSizePhoto src={photo} />
      <Sidebar />
      <div className="w-full">
        <Hero />
        <div className="divider"></div>
        <PartsBin />
        <div className="divider"></div>
        <Portfolio setPhoto={setPhoto} />
      </div>

    </div>

  )
}

export default App
