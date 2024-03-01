import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="font-tourmaline text-3xl">Tourmaline</h1>
      <h1 className="font-hogs text-3xl">H.O.G.S</h1>
      <p className="font-ipsum text-xs text-justify">Here is some lorum ipsum text. Blah blah pepsi coke hooray! This is a sentence. Here is some lorum ipsum text. Blah blah pepsi coke hooray! This is a sentence. Here is some lorum ipsum text. Blah blah pepsi coke hooray! This is a sentence. Here is some lorum ipsum text. Blah blah pepsi coke hooray! This is a sentence. Here is some lorum ipsum text. Blah blah pepsi coke hooray! This is a sentence. Here is some lorum ipsum text. Blah blah pepsi coke hooray! This is a sentence. Here is some lorum ipsum text. Blah blah pepsi coke hooray! This is a sentence. Here is some lorum ipsum text. Blah blah pepsi coke hooray! This is a sentence. Here is some lorum ipsum text. Blah blah pepsi coke hooray! This is a sentence. Here is some lorum ipsum text. Blah blah pepsi coke hooray! This is a sentence. Here is some lorum ipsum text. Blah blah pepsi coke hooray! This is a sentence.</p>
    </>
  )
}

export default App
