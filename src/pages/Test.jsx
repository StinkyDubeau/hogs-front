import Button from "../components/Button.jsx"
import Leaderboard from '../components/Leaderboard.jsx'

export default function Test() {
    return (
        <div className="text-slate-200 backdrop-blur-xl border-white border-t-[#ffffff33] border-x-[#ffffff22] border-b-[#00000033] shadow-lg border-t-2 border-b border-x p-5 rounded-xl">
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
    );
}