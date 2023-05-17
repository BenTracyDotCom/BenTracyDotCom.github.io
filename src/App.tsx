import { useState } from 'react'
import Hero from './components/hero'
import FullSizePhoto from './components/FullSizePhoto';

function App() {
  const [photo, setPhoto] = useState('');

  return (
<div>
  <FullSizePhoto src={photo} />
  <Hero />
  <div>
    The rest of the app
  </div>
</div>
  )
}

export default App
