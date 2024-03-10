import { Link } from "react-router-dom";
import Button from "../components/Button.jsx";
import Leaderboard from "../components/Leaderboard.jsx";
import Polaroid from "../components/Polaroid.jsx";

export default function Test() {
    return (
        <div className="rounded-xl border-x border-b-2 border-t-2 border-white border-x-[#ffffff22] border-b-[#00000033] border-t-[#ffffff33] p-5 text-slate-200 shadow-lg backdrop-blur-xl">
            <p>This is a test page to sandbox new components and functions.</p>

            <h1 className="font-tourmaline text-3xl">Tourmaline</h1>
            <h1 className="font-hogs text-5xl">H.O.G.S</h1>
            <p className="text-justify font-ipsum text-xs">
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
