import { useState } from 'react'
import './App.css'

function App() {
  const emojis = ['☹️', '😐', '😊', '😁']
  const [selectedEmoji, setSelectedEmoji] = useState(3)

  return (
    <div className='app'>
      {
        selectedEmoji === 3 &&
        <spam>
          Super animado!
        </spam>
      }
      <button
        onMouseLeave={() => setSelectedEmoji(0)}
        onMouseEnter={() => setSelectedEmoji(1)}
        onMouseDown={() => setSelectedEmoji(2)}
        onClick={() => setSelectedEmoji(3)}
      >
        {emojis[selectedEmoji]}
      </button>
    </div>
  )
}

export default App
