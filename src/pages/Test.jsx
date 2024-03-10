import Button from "../components/Button.jsx";
import Glass from "../components/materials/Glass.jsx";

export default function Test() {
    return (
        <>
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

                <div className="">
                    <Glass className="top-10 right-4 absolute max-w-36 bg-[#d400ff44]">
                        <h1>This is some purple-ish glass</h1>
                    </Glass>
                    <Glass className="top-32 right-24 absolute max-w-36 bg-[#2ac56544]">
                        <h1>This is some green-ish glass</h1>
                    </Glass>
                    <Glass className="top-4 right-32 absolute max-w-36 bg-[#69696911] backdrop-blur-xs">
                        <h1>This is some clear-er glass</h1>
                    </Glass>
                </div>
            </Glass>
        </>
    );
}
