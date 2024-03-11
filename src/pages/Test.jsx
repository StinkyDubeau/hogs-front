import Button from "../components/Button.jsx";
import Glass from "../components/materials/Glass.jsx";
import Navbar from "../components/Navbar";

export default function Test() {
    return (
        <>
            <div className="m-auto max-w-[1280px] p-2 text-center sm:p-6">
                <Navbar />

                <Glass>
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

                    <div className="mt-4">
                        <Button text="Click me!" />
                        <Button text="Button" />
                    </div>

                    <div className="glass-demos">
                        <Glass className="hover:z-50 hover:scale-105 top-10 right-4 absolute max-w-36 bg-[#d400ff44] transition-all">
                            <h1>This is some purple-ish glass</h1>
                        </Glass>
                        <Glass className="hover:z-50 hover:scale-105 top-32 right-24 absolute max-w-36 bg-[#2ac56544] transition-all">
                            <h1>This is some green-ish glass</h1>
                        </Glass>
                        <Glass className="hover:z-50 hover:scale-105 top-4 right-32 absolute max-w-36 bg-[#69696911] backdrop-blur-xs transition-all">
                            <h1>This is some clear-er glass</h1>
                        </Glass>
                    </div>

                    <hr className="border-slate-400 my-4"/>

                    <div>
                        <label class="form-control w-full max-w-xs">
                            <div class="label">
                                <span class="label-text">What is your name?</span>
                                <span class="label-text-alt">Top Right label</span>
                            </div>
                            <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                            <div class="label">
                                <span class="label-text-alt">Bottom Left label</span>
                                <span class="label-text-alt">Bottom Right label</span>
                            </div>
                        </label>
                    </div>
                </Glass>
            </div>
        </>
    );
}
