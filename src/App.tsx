import React, { useState } from "react";
import words from './wordList.json'

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  })

  console.log(wordToGuess)
  return (
    <div>
      hey i am avijeet
    </div>
  )
}

export default App
