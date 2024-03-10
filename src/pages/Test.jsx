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

                <div className="flex justify-center">
                    <Glass className="max-w-36">
                        <h1>Hello world</h1>
                        <p>This is in glass</p>
                    </Glass>
                </div>
            </Glass>
        </>
    );
}
