import './App.css'
import Score from './assets/components/Score.jsx'
import Button from "./assets/components/Button.jsx"

function App() {
    return (
        <>
            <div className="bg-slate-300 p-5">
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
                <Score />
            </div>
        </>
    )
}

export default App
