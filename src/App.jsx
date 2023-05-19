import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FullSizePhoto from './components/FullSizePhoto';
import Sidebar from './components/Sidebar';
import PartsBin from './components/PartsBin';
import Portfolio from './components/Portfolio';
import SearchModal from './components/search/SearchModal';
import NewReviewModal from './components/NewReviewModal.jsx';
import ContactCard from './components/ContactCard'

function App() {
  const [photo, setPhoto] = useState('');

  return (
    <div className="flex relative">
      <SearchModal />
      <NewReviewModal />
      <FullSizePhoto src={photo} />
      <div className="w-full">
        <Navbar />
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
