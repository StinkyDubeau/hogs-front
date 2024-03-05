import './App.css'
import Button from "./assets/components/Button.jsx"
import Leaderboard from './assets/components/Leaderboard.jsx'

function App() {
    return (
        <>>
            <div className="backdrop-blur-xl border-slate-800 p-5 rounded-xl">
                {/* https://tailwindcss.com/docs/background-image */}
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
                <Button text="Click me!" />
                <Button text="Button" />
                <Leaderboard />
            </div>
        </>
    )
}

export default App
