import Button from "../components/Button";
import Glass from "../components/materials/Glass";
import Frame from "../components/Frame";
import CommunityTicker from "../components/CommunityTicker";

export default function Test() {
    return (
        <Frame noCornerNav>
            <Glass>
                <CommunityTicker />
            </Glass>
            <Glass>
                <p>
                    This is a test page to sandbox new components and functions.
                </p>

                <h1 className="font-tourmaline text-3xl">Tourmaline</h1>
                <h1 className="font-hogs text-5xl">H.O.G.S</h1>
                <p className="text-justify font-ipsum text-xs">
                    Here is some lorum ipsum text. Blah blah pepsi coke hooray!
                    This is a sentence. Here is some lorum ipsum text. Blah blah
                    pepsi coke hooray! This is a sentence. Here is some lorum
                    ipsum text. Blah blah pepsi coke hooray! This is a sentence.
                    Here is some lorum ipsum text. Blah blah pepsi coke hooray!
                    This is a sentence. Here is some lorum ipsum text. Blah blah
                    pepsi coke hooray! This is noPada sentence. Here is some
                    lorum ipsum text. Blah blah pepsi coke hooray! This is a
                    sentence. Here is some lorum ipsum text. Blah blah pepsi
                    coke hooray! This is a sentence. Here is some lorum ipsum
                    text. Blah blah pepsi coke hooray! This is a sentence. Here
                    is some lorum ipsum text. Blah blah pepsi coke hooray! This
                    is a sentence. Here is some lorum ipsum text. Blah blah
                    pepsi coke hooray! This is a sentence. Here is some lorum
                    ipsum text. Blah blah pepsi coke hooray! This is a sentence.
                </p>

                <div className="mt-4">
                    <Button text="Click me!" />
                    <Button text="Button" />
                </div>

                <div className="glass-demos">
                    <Glass className="absolute right-4 top-10 max-w-36 bg-[#d400ff44] transition-all hover:z-50 hover:scale-105">
                        <h1>This is some purple-ish glass</h1>
                    </Glass>
                    <Glass className="absolute right-24 top-32 max-w-36 bg-[#2ac56544] transition-all hover:z-50 hover:scale-105">
                        <h1>This is some green-ish glass</h1>
                    </Glass>
                    <Glass className="absolute right-32 top-4 max-w-36 bg-[#69696911] backdrop-blur-xs transition-all hover:z-50 hover:scale-105">
                        <h1>This is some clear-er glass</h1>
                    </Glass>
                </div>

                <hr className="my-4 border-slate-400" />

                <div>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">What is your name?</span>
                            <span className="label-text-alt">Top Right label</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered w-full max-w-xs"
                        />
                        <div className="label">
                            <span className="label-text-alt">
                                Bottom Left label
                            </span>
                            <span className="label-text-alt">
                                Bottom Right label
                            </span>
                        </div>
                    </label>
                </div>
            </Glass>
        </Frame>
    );
}
