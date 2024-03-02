import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Score from './assets/components/Score.jsx'

function App () {
    const [count, setCount] = useState(0)

    return (
        <>
            <h1 className='font-tourmaline text-3xl'>Tourmaline</h1>
            <h1 className='font-hogs text-5xl'>H.O.G.S</h1>
            <p className='font-ipsum text-xs text-justify'>
                Here is some lorum ipsum text. Blah blah pepsi coke hooray! This
                is a sentence. Here is some lorum ipsum text. Blah blah pepsi
                coke hooray! This is a sentence. Here is some lorum ipsum text.
                Blah blah pepsi coke hooray! This is a sentence. Here is some
                lorum ipsum text. Blah blah pepsi coke hooray! This is a
                sentence. Here is some lorum ipsum text. Blah blah pepsi coke
                hooray! This is a sentence. Here is some lorum ipsum text. Blah
                blah pepsi coke hooray! This is a sentence. Here is some lorum
                ipsum text. Blah blah pepsi coke hooray! This is a sentence.
                Here is some lorum ipsum text. Blah blah pepsi coke hooray! This
                is a sentence. Here is some lorum ipsum text. Blah blah pepsi
                coke hooray! This is a sentence. Here is some lorum ipsum text.
                Blah blah pepsi coke hooray! This is a sentence. Here is some
                lorum ipsum text. Blah blah pepsi coke hooray! This is a
                sentence.
            </p>
            <button className='font-sansui bg-red-500 p-2 rounded-lg border-solid hover:bg-red-600 '>
                Click me
            </button>
            <button className='font-sansui bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                Button
            </button>
            <Score />
        </>
    )
}

export default App
